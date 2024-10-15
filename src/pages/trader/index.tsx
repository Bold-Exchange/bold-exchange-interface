import { TagSelector } from "@/components";
import ListCard from '@/components/ListCard'
import Tl from "./Tl";
import { CopyOutlined, RightOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [v, setV] = useState('Gem');
  const TokenItem = () => {
    return (
      <div className="flex items-center rounded-md justify-between py-2 hover:bg-gray-700 p-2">
        <div>1</div>
        <div className="flex items-center gap-2">
          <img className="w-[24px] rounded-full" src="https://dd.dexscreener.com/ds-data/tokens/ethereum/0xc06caead870d3a8af2504637b6c5b7248bed6116.png" />
          BUSINESS
        </div>

        <div className="text-red-500">-00.50%</div>
        <div>2</div>
      </div>
    );
  };
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
          <TokenItem />·
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
  return (
    <div className="flex flex-col p-2">
      <TagSelector
        tags={["Gem", "Signal", "Rank"]}
        onTagSelect={(v) => { setV(v) }}
      />
      {
        v == 'Gem' && <>
          <div className="flex gap-4">
            <div className="flex-col flex-auto">
              <div className="flex gap-4">
                <TopItem title="🔥 Smart Trending(1H)" />
                <TopItem title="🔥 Smart Trending(1H)" />
              </div>
              <div className="flex items-center justify-between p-2">
                <div>TXs
                  📈 Most Profit KOLs(30D)
                </div>
                <div>
                  More <RightOutlined style={{ fontSize: "0.5rem" }} />
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <TopItem title="🔥 Smart Trending(1H)" />
            </div>
          </div>

        </>}
      {
        v == 'Signal' && <></>}
      {
        v == 'Rank' && <> <div>
          <TagSelector
            tags={["All", "Pump SM", "Smart Money", "KOL/VC", "Sniper"]}
            onTagSelect={() => { }}
          />
        </div>
          <Tl /></>}

    </div>
  );
};
export default Meme;
