import Tl from "./Tl";
import { Layout, Tabs, TabsProps } from "antd";
import Menu from "@/components/Menu";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState, useCallback } from "react";
import { Network, Pool } from "@/api/api_types";
import { api } from "@/api";
import { useInView } from "react-intersection-observer";
import TimeFrame from "@/components/TimeFrame";
import { TimeFrameType } from "@/api/param_types";

const items: TabsProps["items"] = [
  {
    key: "all",
    label: "All DEXes",
  },
  {
    key: "raydium",
    label: "Raydium",
    icon: (
      <img
        className="inline-block"
        alt="Raydium"
        width={20}
        src="https://dd.dexscreener.com/ds-data/dexes/raydium.png"
        loading="lazy"
      />
    ),
  },
  {
    key: "orca",
    label: "Orca",
    icon: (
      <img
        className="inline-block"
        alt="Raydium"
        width={20}
        src="https://dd.dexscreener.com/ds-data/dexes/orca.png"
        loading="lazy"
      />
    ),
  },
  {
    key: "meteora",
    label: "Meteora",
    icon: (
      <img
        className="inline-block"
        alt="Raydium"
        width={20}
        src="https://dd.dexscreener.com/ds-data/dexes/meteora.png"
        loading="lazy"
      />
    ),
  },
  {
    key: "fluxbeam",
    label: "FluxBeam",
    icon: (
      <img
        className="inline-block"
        alt="Raydium"
        width={20}
        src="https://dd.dexscreener.com/ds-data/dexes/fluxbeam.png"
        loading="lazy"
      />
    ),
  },
  {
    key: "1nitro",
    label: "1INTRO",
    icon: (
      <img
        className="inline-block"
        alt="Raydium"
        width={20}
        src="https://dd.dexscreener.com/ds-data/dexes/1intro.png"
        loading="lazy"
      />
    ),
  },
];

const App = () => {
  const [network, setNetwork] = useState<Network>("eth");
  const [pools, setPools] = useState<Pool[]>([]);
  const [filteredPools, setFilteredPools] = useState<Pool[]>([]);
  const [tokenImages, setTokenImages] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedTimeFrame, setSelectedTimeFrame] =
    useState<TimeFrameType>("5m");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchPools = useCallback(
    async (pageNum: number, shouldAppend = false) => {
      if (loading) return;

      try {
        setLoading(true);
        const response = await api.getTrendingPools(
          { network },
          { page: pageNum },
          "base_token",
          selectedTimeFrame
        );

        // Create a mapping of token IDs to their image URLs from the included data
        const newTokenImages = (response.included || []).reduce((acc, item) => {
          if (item.attributes?.image_url) {
            acc[item.id] = item.attributes.image_url;
          }
          return acc;
        }, {} as Record<string, string>);

        if (shouldAppend) {
          setPools((prev) => [...prev, ...response.data]);
          setFilteredPools((prev) => [...prev, ...response.data]);
          setTokenImages((prev) => ({ ...prev, ...newTokenImages }));
        } else {
          setPools(response.data);
          setFilteredPools(response.data);
          setTokenImages(newTokenImages);
          setPage(1);
          setHasMore(true);
        }
      } catch (error) {
        console.error("Failed to fetch pools:", error);
      } finally {
        setLoading(false);
      }
    },
    [network, loading, selectedTimeFrame]
  );

  // Initial load and auto-refresh
  useEffect(() => {
    // Reset pagination when network or timeframe changes
    setPage(1);
    setHasMore(true);
    fetchPools(1, false);

    // Set up auto-refresh every 5 seconds
    const intervalId = setInterval(() => {
      fetchPools(1, false);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [network, selectedTimeFrame]);

  // Infinite scroll
  useEffect(() => {
    if (inView && hasMore && !loading) {
      const nextPage = page + 1;
      fetchPools(nextPage, true);
      setPage(nextPage);
    }
  }, [inView, hasMore, loading, fetchPools, page]);

  const handleTabChange = (activeKey: string) => {
    if (activeKey === "all") {
      setFilteredPools(pools);
      return;
    }

    const filtered = pools.filter((pool) => {
      const dexId = pool.relationships.dex.data.id.toLowerCase();
      return (
        dexId === activeKey ||
        (activeKey === "raydium" && dexId === "raydium-clmm")
      );
    });
    setFilteredPools(filtered);
  };

  return (
    <Layout style={{ padding: 0 }}>
      <Sider
        style={{ background: "transparent" }}
        collapsedWidth={0}
        width={160}
      >
        <Menu setNetwork={setNetwork} />
      </Sider>
      <Layout>
        <Tabs defaultActiveKey="all" items={items} onChange={handleTabChange} />
        <TimeFrame
          onTimeFrameChange={setSelectedTimeFrame}
          selectedTimeFrame={selectedTimeFrame}
        />
        <Tl pools={filteredPools} network={network} tokenImages={tokenImages} />
        {pools.length > 0 && <div ref={ref} style={{ height: "20px" }} />}
      </Layout>
    </Layout>
  );
};
export default App;
