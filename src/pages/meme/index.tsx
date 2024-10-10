import { Icon, TagSelector, Chains } from "@/components";
import Tl from "../index/Tl";
import { CopyOutlined, RightOutlined } from "@ant-design/icons";
import T1 from "../trade/T1";
import { TradeType } from "./type";
import Item from "./Item";
import { useState } from "react";
import { Select } from "antd";
const TokenItem = () => {
  return (
    <div className="flex items-center rounded-md justify-between py-2 hover:bg-gray-700 p-2">
      <div className="flex items-center gap-2">
        <img className="w-[24px]" src="/icons/bsc.svg" />
        BNB
      </div>
      <div>$542.00</div>
      <div className="text-red-500">-00.50%</div>
    </div>
  );
};
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
const TopItem = ({ title }) => {
  return (
    <div className="rounded-lg bg-zinc-900  p-2 flex-1">
      <div className="flex items-center justify-between p-2">
        <div>{title}</div>
        <div>
          More <RightOutlined style={{ fontSize: "0.5rem" }} />
        </div>
      </div>
      <div className="overflow-auto h-[120px]">
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
        <TokenItem />
      </div>
    </div>
  );
};
const Meme = () => {
  const [v, setV] = useState(false);
  const [ch, setCh] = useState(0);

  const [active,setActive]=useState(0)

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-2 mb-4 mt-2">
        <div className="font-bold  text-xl">Markets Overview</div>
      </div>
      <div className="flex gap-2 w-full overflow-auto">
        <TopItem title="Trending" />
        <TopItem title="New Listing" />
        <TopItem title="Top Gainer Coin" />
        <TopItem title="Top Volume Coin" />
      </div>
      <div className="pt-4">
        <Chains
          noPrice
          onChange={(v) => {
            setCh(v);
          }}
        />
      </div>
      <div className="flex items-center gap-4 mb-2 bg-zinc-900 p-1 rounded-lg">
        {ch == 0 && (
          <>
            <div className="font-bold flex items-center gap-1">
              <Icon.Jiaonang />
              Pump
            </div>
            <div className="font-bold flex items-center gap-1 opacity-50">
              <Icon.Moon />
              Moonshot
            </div>
            <div className="font-bold flex items-center gap-1 opacity-50">
              <img
                src="https://whales.meme/images/logo.meme.svg"
                style={{ width: "20px" }}
              />
              Whales
            </div>

            <div className="font-bold flex items-center gap-1 opacity-50">
              <Icon.Booster width={24} />
              Booster
            </div>
          </>
        )}
        {ch == 3 && (
          <>
            <div className="font-bold flex items-center gap-1">
              <img
                src="https://www.dx.fun/images/small_logo.svg"
                style={{ width: "20px" }}
              />
              Dx.fun
            </div>
            <div className="font-bold flex items-center gap-1">
              <img src="icons/we.svg" style={{ width: "20px" }} />
              We
            </div>
          </>
        )}
        {ch == 2 && (
          <>
            <div className="font-bold flex items-center gap-1">
              <img
                src="https://four.meme/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.30ad9397.png&w=256&q=75"
                style={{ width: "20px" }}
              />
              Four
            </div>
            <div className="font-bold flex items-center gap-1">
              <img src="icons/gra.svg" style={{ width: "40px" }} />
            </div>
          </>
        )}
        {ch == 4 && (
          <>
            <div className="font-bold flex items-center gap-1">
              <img src="icons/gra.svg" style={{ width: "40px" }} />
            </div>
          </>
        )}
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
      <Tl idata={data.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * data.length))}/>
      {/* {(v && <Tl />) || (
        <div className="grid gap-4 grid-cols-3 flex-1">
          <div className="flex flex-col bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🌱 New Pool</div>
            <div className="overflow-y-auto flex-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🔥 Burnt</div>
            <div className="overflow-y-auto">
              {Array.from({ length: 7 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🦅 Spent</div>
            <div className="overflow-y-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
export default Meme;
