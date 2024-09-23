import { CopyText, TagSelector, Icon } from "@/components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { createChart, ColorType } from "lightweight-charts";
import Tl from "./Tl";
import PoolInfo from "./PoolInfo";
import DataStatistics from "./DataStatistics";
import Buy from "./Buy";
import Charts from "../portfolio/Charts";
import { SyncOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { hooks, metaMask } from "@/connectors/metaMask";
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
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
  const accounts: string[] | undefined = useAccounts();
  return (
    <div>
      <div className="flex">
        <div className="h-[500px] flex-auto">
          <div className="flex items-center mb-4 gap-2 px-2">
            <Rate count={1} />
            <img
              width={64}
              src="https://gmgn.ai/static/avator_new/140.png"
              className="rounded-full"
              alt="avatar"
            />
            <div className="text-gray-500 text-sm">
              <p className="flex items-center gap-2 text-white text-lg">
                <span>STASHY</span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  Mustache Cat
                  <Icon.Jiaonang />
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <Icon.Ads />
                  ads
                </span>
                <span className="flex items-center text-gray-500 text-xs">
                  <Icon.Website />

                  <Icon.Twitter />
                  <Icon.Telegram />
                  <Icon.Solana />
                </span>
              </p>
              <p className="flex items-center gap-2">
                <CopyText
                  text={"966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb"}
                />
                <span className="text-gray-500 text-xs">12d ago</span>
                <span className="flex items-center gap-1 text-red-500 text-xs">
                  <img
                    width={12}
                    src={"https://gmgn.ai/static/img/creator_run.webp"}
                  />
                  Dev Sell All
                </span>
                <div className="flex items-center gap-1 text-gray-500 text-xs border border-gray-500 rounded-lg px-2 py-1">
                  <div className="rounded-lg bg-green-700 p-1 w-1 h-1"></div>
                  Snipers:1/70
                </div>
              </p>
            </div>
          </div>
          <TradingViewWidget
            symbol="BTCUSD"
            theme={Themes.DARK}
            locale="fr" 
            autosize
            backgroundColor="#000000"
            toolbar_bg="#000000"
            // 设置图表详细颜色参数
            overrides={{
              "paneProperties.background": "#000000",
              // 图表区域背景色
              "paneProperties.vertGridProperties.color": "#333333",
              // 垂直网格线颜色
              "paneProperties.horzGridProperties.color": "#333333",
              // 水平网格线颜色
              "scalesProperties.textColor": "#D3D3D3",
              // 轴标签文本颜色
            }}
          />
          <div className="flex gap-2 my-2">
            <div className="bg-gray-700 rounded-lg p-1 hover:bg-gray-700">
              Activity
            </div>
            <div className="opacity-25 bg-gray-700 rounded-lg p-1 hover:opacity-100">
              Holders(196)
            </div>
            <div className="opacity-25 bg-gray-700 rounded-lg p-1 hover:opacity-100">
              My Postion(0)
            </div>
          </div>
          <TagSelector
            tags={[
              "All",
              "Buy",
              "Sell",
              "Swap",
              "Mint",
              "Burn",
              "Transfer",
              "Other",
            ]}
            onTagSelect={() => {}}
          />

          <Tl />
        </div>
        <div
          className="w-[320px] flex flex-col gap-4"
          style={{ marginLeft: "20px" }}
        >
          <Buy />
          <DataStatistics />
          <PoolInfo title="Pool Info" data={data} more={<a href="#">-</a>} />
        </div>
      </div>
    </div>
  );
};
export default App;
