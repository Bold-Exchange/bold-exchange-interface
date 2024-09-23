import { CopyText } from "@/components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import Tl from "./Tl";
import PoolInfo from "./PoolInfo";
import DataStatistics from "./DataStatistics";
import Buy from "./Buy";
import Charts from "../portfolio/Charts";
import {
  AndroidOutlined,
  AppleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Layout, Rate, Tabs } from "antd";
import Menu from "@/components/Menu";
import Sider from "antd/es/layout/Sider";
// 测试数据
const data = [
  { title: "Total liq", value: "$5,770.94(20.54 SOL)" },
  { title: "Market cap", value: "$3,09" },
  { title: "Holders", value: "196" },
  { title: "Total supply", value: "930.6M" },
  { title: "Pair", value: <CopyText text={"De9fp22222222han"} /> },
  {
    title: "Token creator",
    value: <CopyText text={"Hr2hz222333333322yiE"} extension="(0SOL)" />,
  },
  { title: "Pool created", value: "07/02/2024 19:03" },
];
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All DEXes",
  },
  {
    key: "3",
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
    key: "4",
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
    key: "5",
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
    key: "6",
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
    key: "7",
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
  return (
    <Layout style={{padding:0}}>
      <Sider
       style={{background:'transparent'}}
              collapsedWidth={0}
              width={160}
            >
      <Menu />
      </Sider>
      <Layout>
      <Tabs defaultActiveKey="1" items={items} />
      <Tl />
      </Layout>
      
    </Layout>
  );
};
export default App;
