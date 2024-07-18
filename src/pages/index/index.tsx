import { CopyText } from "@/components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import Tl from "./Tl";
import PoolInfo from "./PoolInfo";
import DataStatistics from "./DataStatistics";
import Buy from "./Buy";
import Charts from "../portfolio/Charts";
import { SyncOutlined } from "@ant-design/icons";
import { Rate } from "antd";
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
const App = () => {
  return (
    <div>
      <Tl />
    </div>
  );
};
export default App;
