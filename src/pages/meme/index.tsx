import { Icon, TagSelector } from "@/components";
import Tl from "../index/Tl";
import { CopyOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [v, setV] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="font-bold flex items-center gap-1">
          <Icon.Jiaonang />
          Pump
        </div>
        <div className="font-bold flex items-center gap-1 opacity-50">
          <Icon.Moon />
          Moonshot
        </div>
        <div className="font-bold flex items-center gap-1 opacity-50">
          <Icon.Booster width={24} />
          Booster
        </div>
        <TagSelector
          tags={["Pump", "New Creation", "Completing"]}
          onTagSelect={(e: string) => {
            setV(e != "Pump");
          }}
        />
      </div>
      {(v && <Tl />) || (
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
      )}
    </div>
  );
};
export default Meme;
