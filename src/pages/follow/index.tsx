import { TagSelector } from "@/components";
import Tl from "./Tl";
import { CopyOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [active, setActive] = useState('Watchlist');
  const TradeType=['Watchlist','Follow','Activity']
  return (
    <div className="flex flex-col p-2">
      <div className="flex gap-4">
      <div className="flex gap-2 my-2">
        {TradeType.map((item) => (
          <div className={`${item!==active&&'opacity-25'}  bg-gray-700 rounded-lg p-1 cursor-pointer hover:bg-gray-700`} onClick={()=>{setActive(item);}}>
            {item}
          </div>
        ))}
      </div>
        <TagSelector
          tags={["1m", "5m", "6h", "12h", "24h"]}
          onTagSelect={() => {}}
        />
      </div>
      <Tl />
    </div>
  );
};
export default Meme;
