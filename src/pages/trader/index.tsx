import { TagSelector } from "@/components";
import ListCard from "@/components/ListCard";
import Tl from "./Tl";
import { CopyOutlined, RightOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
import { Button } from "antd";
const Meme = () => {
  const [v, setV] = useState("Gem");
  const TokenItem = () => {
    return (
      <div className="flex items-center rounded-md justify-between py-2 hover:bg-gray-700 p-2">
        <div>1</div>
        <div className="flex items-center gap-2">
          <img
            className="w-[24px] rounded-full"
            src="https://dd.dexscreener.com/ds-data/tokens/ethereum/0xc06caead870d3a8af2504637b6c5b7248bed6116.png"
          />
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
        </div>
      </div>
    );
  };
  const TokenItem2 = () => {
    return (
      <div className="flex items-center rounded-md justify-between py-2 hover:bg-gray-700 p-2">
        <div className="flex items-center gap-2">
          <img
            className="w-[24px] rounded-full"
            src="https://dd.dexscreener.com/ds-data/tokens/ethereum/0xc06caead870d3a8af2504637b6c5b7248bed6116.png"
          />
          <div>
            <p>BUSINESS</p>
            <p className="text-s">70 Smart Degen</p>
          </div>
        </div>

        <div className="text-wihte-500">
          <p>$$1.4M</p>
          <p className="text-gray-500">Inflow</p>
        </div>
      </div>
    );
  };
  const TopItem2 = ({ title }) => {
    return (
      <div className="rounded-lg bg-zinc-900  p-2 flex-1">
        <div className="flex items-center justify-between p-2">
          <div>{title}</div>
          <div>
            <TagSelector tags={["7d", "30d"]} onTagSelect={() => {}} />
          </div>
        </div>
        <div className="overflow-auto h-[300px]">
          <TokenItem2 />
          <TokenItem2 />
          <TokenItem2 />
          <TokenItem2 />
          <TokenItem2 />
          <TokenItem2 />
          <TokenItem2 />
          <TokenItem2 />
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col p-2">
      <TagSelector
        tags={["Gem", "Signal", "Rank"]}
        onTagSelect={(v) => {
          setV(v);
        }}
      />
      {v == "Gem" && (
        <>
          <div className="flex gap-4">
            <div className="flex-auto">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <TopItem title="🔥 Smart Trending(1H)" />
                  <TopItem title="📢 KOL Trending(1H)" />
                </div>
                <div className="flex items-center justify-between p-2">
                  <div>TXs 📈 Most Profit KOLs(30D)</div>
                  <div>
                    <TagSelector
                      tags={["KOL", "Smart Money"]}
                      onTagSelect={(v) => {
                        setV(v);
                      }}
                    />
                  </div>
                </div>

                <div className="flex gap-4 justify-between">
                  {new Array(4).fill(null).map((_, index) => (
                    <div className="bg-zinc-900 rounded-md flex flex-col items-center flex-auto p-2">
                      <img
                        className="w-[44px]"
                        src="https://dd.dexscreener.com/ds-data/tokens/ethereum/0xc06caead870d3a8af2504637b6c5b7248bed6116.png"
                      />
                      <p>0x596...49c</p>
                      <p className="text-xl text-green-500">0.5X</p>
                      <Button className="w-full">Follow</Button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between p-2">
                  <div>🎯 Signal Rank</div>
                  <div>
                    More
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3">
              <TopItem2 title="Smarts Holding" />
            </div>
          </div>
        </>
      )}
      {v == "Signal" && <></>}
      {v == "Rank" && (
        <>
          {" "}
          <div>
            <TagSelector
              tags={["All", "Pump SM", "Smart Money", "KOL/VC", "Sniper"]}
              onTagSelect={() => {}}
            />
          </div>
          <Tl />
        </>
      )}
    </div>
  );
};
export default Meme;
