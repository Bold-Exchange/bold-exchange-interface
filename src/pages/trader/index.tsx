import { TagSelector } from "@/components";
import ListCard from '@/components/ListCard'
import Tl from "./Tl";
import { CopyOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [v, setV] = useState('Gem');
  return (
    <div className="flex flex-col p-2">
      <div>
      <TagSelector
          tags={["Gem", "Rand"]}
          onTagSelect={(e) => {setV(e)}}
        />
      </div>
     
      {
      
      v=='Rand'&&<> <div>
      <TagSelector
        tags={["All", "Pump SM", "Smart Money", "KOL/VC", "Sniper"]}
        onTagSelect={() => {}}
      />
      <Tl />
    </div></>
      }
      {
      
      v=='Gem'&&<>
     <ListCard />
      </>
      }
    </div>
  );
};
export default Meme;
