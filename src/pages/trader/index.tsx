import { TagSelector } from "@/components";
import Tl from "./Tl";
import { CopyOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [v, setV] = useState(false);
  return (
    <div className="flex flex-col p-2">
      <div>
        <TagSelector
          tags={["All", "Pump SM", "Smart Money", "KOL/VC", "Sniper"]}
          onTagSelect={() => {}}
        />
      </div>
      <Tl />
    </div>
  );
};
export default Meme;
