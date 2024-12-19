import Tl from "./Tl";
import { Layout, Tabs, TabsProps } from "antd";
import Menu from "@/components/Menu";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { PoolData, PoolsResponse } from "@/api/types";
import { api } from "@/api";


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
  const [pools, setPools] = useState<PoolData[]>([]);
  const [filteredPools, setFilteredPools] = useState<PoolData[]>([]);

  useEffect(() => {
    const fetchPools = async () => {
      try {
        const { data } = await api.getTrendingPools({ network: 'solana' });
        setPools(data.data);
        setFilteredPools(data.data);
      } catch (error) {
        console.error('Failed to fetch pools:', error);
      }
    };

    fetchPools();
  }, []);

  const handleTabChange = (activeKey: string) => {
    if (activeKey === 'all') {
      setFilteredPools(pools);
      return;
    }

    const filtered = pools.filter(pool => {
      const dexId = pool.relationships.dex.data.id.toLowerCase();
      return dexId === activeKey ||
        (activeKey === 'raydium' && dexId === 'raydium-clmm');
    });
    setFilteredPools(filtered);
  };

  return (
    <Layout style={{ padding: 0 }}>
      <Sider
        style={{ background: 'transparent' }}
        collapsedWidth={0}
        width={160}
      >
        <Menu />
      </Sider>
      <Layout>
        <Tabs defaultActiveKey="all" items={items} onChange={handleTabChange} />
        <Tl pools={filteredPools} />
      </Layout>

    </Layout>
  );
};
export default App;
