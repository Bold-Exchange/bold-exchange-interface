import { TagSelector } from "@/components";
import Tl from "./Tl";
import { CopyOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [v, setV] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <strong className="text-lg">Trending</strong>
        <TagSelector
          tags={["1m", "5m", "1h", "6h", "24h"]}
          onTagSelect={() => {}}
        />
      </div>
      <Tl />
    </div>
  );
};
export default Meme;
