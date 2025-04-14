import { CopyText, TagSelector, Icon, Block } from "@/components";
//import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Tl from "./Tl";
import Buy from "./Buy";
import { Button, Rate } from "antd";
import { ReactComponent as IconCreate } from "./createApi.svg";
import { TradeType } from "../meme/type";
import { useState, useEffect } from "react";
import { useParams } from "umi";
import { PoolResponse, Pool, Trade } from "@/api/api_types";
import { api } from "@/api";
import { TVChartContainer } from "./TVChartContainer";
import { version } from "../../charting_library";

const generateRandomData = () => {
  const baseData = [
    {
      key: "1",
      type: 0,
      img: "/images/whbles.png",
      rental: 9.92,
      quantity: "3.2M",
      price: "$0.00047",
      profit: "--",
      duration: "--",
    },
    {
      key: "2",
      type: 0,
      currency: "Motion",
      rental: 1.91,
      quantity: "12.8M",
      price: "$0.0₄21978",
      profit: "--",
      duration: "--",
    },
    {
      key: "3",
      type: 0,
      currency: "Motion",
      rental: 1.91,
      quantity: "18.2M",
      price: "$0.0₄16011",
      profit: "--",
      duration: "--",
    },
    {
      key: "1",
      type: 1,
      currency: "RIZZ",
      rental: 9.92,
      quantity: "3.2M",
      price: "$0.00047",
      profit: "--",
      duration: "--",
    },
    {
      key: "2",
      type: 0,
      currency: "Motion",
      rental: 1.91,
      quantity: "12.8M",
      price: "$0.0₄21978",
      profit: "--",
      duration: "--",
    },
    {
      key: "3",
      type: 1,
      currency: "Motion",
      rental: 1.91,
      quantity: "18.2M",
      price: "$0.0₄16011",
      profit: "--",
      duration: "--",
    },
  ];

  const randomLength = Math.floor(Math.random() * 10) + 15; // 生成15到25之间的随机长度
  let data = [];

  for (let i = 0; i < randomLength; i++) {
    const randomIndex = Math.floor(Math.random() * baseData.length);
    data.push({ ...baseData[randomIndex], key: `${i + 1}` });
  }

  return data;
};

const data = generateRandomData();

const App = () => {
  const params = useParams();
  const [poolInfo, setPoolInfo] = useState<PoolResponse<Pool>>();
  const [trades, setTrades] = useState<Trade[]>([]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (params.chain && params.address) {
      api
        .getPool({
          network: params.chain,
          address: params.address,
          include: "base_token",
        })
        .then((res) => {
          setPoolInfo(res.data);
        });

      api
        .getPoolTrades({
          network: params.chain,
          address: params.address,
        })
        .then((res) => {
          setTrades(res.data.data);
        });
    }
  }, [params]);

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
              src={poolInfo?.included?.[0]?.attributes?.image_url ?? ""}
              className="rounded-full"
              alt="avatar"
            />
            <div className="text-gray-500 text-sm">
              <p className="flex items-center gap-2 text-white text-lg">
                <span>{poolInfo?.included?.[0]?.attributes?.name}</span>
                <span className="flex items-center text-gray-500 text-xs">
                  <Icon.Website />
                  <Icon.Twitter />
                  <Icon.Telegram />
                </span>
              </p>
              <p className="flex items-center gap-1 text-[12px]">
                <span className="flex items-center gap-1 text-gray-300 text-xs">
                  {poolInfo?.data.attributes?.name}
                </span>
              </p>
            </div>
            <div className="flex">
              <Block title={"Price"}>
                <span className="text-gray-300 text-[16px]">
                  {" "}
                  ${poolInfo?.data.attributes?.base_token_price_usd}
                </span>
              </Block>
              <Block title={"24h Change"}>
                <span className="text-green-500">
                  {" "}
                  {poolInfo?.data.attributes?.price_change_percentage.h24}%
                </span>
              </Block>
              <Block textAlign="text-left" title={"FDV"}>
                <span className="text-gray-300">
                  {" "}
                  ${poolInfo?.data.attributes?.fdv_usd}
                </span>
              </Block>
              <Block title={"24 Vol"}>
                <span className="text-gray-300">
                  {" "}
                  ${poolInfo?.data.attributes?.volume_usd.h24}
                </span>
              </Block>
              <Block title={"Holders"}>
                <span className="text-gray-300">
                  {" "}
                  {poolInfo?.data.attributes?.transactions.h24?.buyers}
                </span>
              </Block>
              <Block title={"Liquidity"}>
                <span className="text-gray-300">
                  {" "}
                  ${poolInfo?.data.attributes?.reserve_in_usd}
                </span>
              </Block>
              <Block title={"Pair"}>
                <span className="text-gray-300 text-[12px]">
                  <CopyText text={poolInfo?.data.attributes?.address || ""} />
                </span>
              </Block>
              <Block title={"Coin"}>
                <span className="text-gray-300 text-[12px]">
                  <CopyText
                    text={poolInfo?.included?.[0]?.attributes?.address || ""}
                  />
                </span>
              </Block>
            </div>
          </div>
          {/* <TradingViewWidget
            src="https://dexscreener.com/solana/2tge3aeuqxsrmtbzk1vqavj2hvvutuu82fcapptvdsdn"
            //symbol="BTCUSD"
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
          /> */}
          <TVChartContainer
            name={poolInfo?.data.attributes?.name || ""}
            network={params.chain || ""}
            address={poolInfo?.data.attributes?.address || ""}
          />
          
          <div className="pl-4">
            <div className="flex gap-2 my-2">
              {TradeType.map((item, index) => (
                <div
                  className={`${
                    index == active && "bg-[#fff200] text-black"
                  }   rounded-lg p-1 cursor-pointer hover:bg-[#fff200] hover:text-black`}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {item.lable}
                </div>
              ))}
            </div>
            <TagSelector
              tags={TradeType[active].children.map((item) => item.lable)}
              onTagSelect={(index) => {}}
            />

            <Tl data={trades} />
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
              <Button>
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
              <Button>
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
              <Button>
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
              <Button>
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
