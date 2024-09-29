import { CopyText, TagSelector, Icon, Block } from "@/components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { createChart, ColorType } from "lightweight-charts";
import Tl from "./Tl";
import PoolInfo from "./PoolInfo";
import DataStatistics from "./DataStatistics";
import Buy from "./Buy";
import Charts from "../portfolio/Charts";
import { SyncOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import { hooks, metaMask } from "@/connectors/metaMask";
import { ReactComponent as IconCreate } from "./createApi.svg";
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
      <div className="flex p-1">
        <div className="h-[500px] flex-auto">
          <div className="flex items-center gap-2 px-2 mb-2 h-[30px]">
            <Rate count={1} />
            <div className="hover:bg-gray-800 rounded-md p-1 cursor-pointer">
              BTC<span className="text-red-500">-0.38%</span>
            </div>
            <div className="hover:bg-gray-800 rounded-md p-1 cursor-pointer">
              ETH<span className="text-green-500">+9.0%</span>
            </div>
            <div className="hover:bg-gray-800 rounded-md p-1 cursor-pointer">
              USDT<span className="text-red-500">-0.38%</span>
            </div>
            <div className="hover:bg-gray-800 rounded-md p-1 cursor-pointer">
              PEPE<span className="text-green-500">+0.38%</span>
            </div>
          </div>
          <div className="flex items-center mb-2 gap-2 px-2">
            <Rate count={1} />
            <img
              width={40}
              src="https://images.blur.io/_blur-prod/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/4142-e95a5f542b67c752?w=64"
              className="rounded-full"
              alt="avatar"
            />
            <div className="text-gray-500 text-sm">
              <p className="flex items-center gap-2 text-white text-lg">
                <span>PEPE</span>
                <span className="flex items-center text-gray-500 text-xs">
                  <Icon.Website />
                  <Icon.Twitter />
                  <Icon.Telegram />
                </span>
              </p>
              <p className="flex items-center gap-1 text-[12px]">
                <span className="flex items-center gap-1 text-gray-300 text-xs">
                  pepe
                </span>
              </p>
            </div>
            <div className="flex">
              <Block title={"Price"}>
                <span className="text-gray-300 text-[16px]"> $42.97</span>
              </Block>
              <Block title={"24h Change"}>
                <span className="text-green-500"> 1.01%</span>
              </Block>
              <Block textAlign="text-left" title={"FDV"}>
                <span className="text-gray-300"> $3,3362.12</span>
              </Block>
              <Block title={"24 Vol"}>
                <span className="text-gray-300"> $42.97</span>
              </Block>
              <Block title={"Holders"}>
                <span className="text-gray-300"> 236</span>
              </Block>
              <Block title={"Liquidity"}>
                <p className="text-gray-300"> 866.6M</p>
              </Block>
              <Block title={"Pair"}>
                <span className="text-gray-300 text-[12px]">
                  <CopyText
                    text={"fr8jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEam"}
                  />
                </span>
              </Block>
              <Block title={"Coin"}>
                <span className="text-gray-300 text-[12px]">
                  <CopyText
                    text={"966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb"}
                  />
                </span>
              </Block>
            </div>
          </div>
          <TradingViewWidget
            symbol="BTCUSD"
            theme={Themes.DARK}
            locale="fr"
            autosize
            backgroundColor="#101014"
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
          <div className="pl-4">
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
        
        </div>
        <div
          className="w-[320px] flex flex-col gap-4"
          style={{ marginLeft: "20px" }}
        >
          <Buy />
          {/* <DataStatistics /> */}
          {/* <PoolInfo title="Pool Info" data={data} more={<a href="#">-</a>} /> */}
          <div className="flex bg-zinc-900 rounded-lg p-3 items-end">
            <div className="flex-auto">
              <p className="text-[18px]">Grid Trading Bot</p>
              <p className="text-gray-400 mt-4">24/7 buy low and sell high</p>
            </div>
            <div>
              <Button type="primary">
                <IconCreate style={{ width: "12px", fill: "#fff" }} />
                Create
              </Button>
            </div>
          </div>
          <div className="flex bg-zinc-900 rounded-lg p-3 items-end">
            <div className="flex-auto">
              <p className="text-[18px]">Grid Trading Bot</p>
              <p className="text-gray-400 mt-4">24/7 buy low and sell high</p>
            </div>
            <div>
              <Button type="primary">
                <IconCreate style={{ width: "12px", fill: "#fff" }} />
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
