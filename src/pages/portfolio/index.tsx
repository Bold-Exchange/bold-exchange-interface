import { useEffect,useState } from "react";
import { InfoItem, CopyText, Heart, ListMenu } from "@/components";
import Tl from "../trade/Tl";
import { SyncOutlined } from "@ant-design/icons";
import { ReactComponent as IconCopy } from "./copy.svg";
import { ReactComponent as IconShare } from "./share.svg";
import { Button, Rate, Tabs } from "antd";
import PercentageSelector from "@/components/PercentangeSelector";
const Docspage = () => {
const [index,setIndex]=useState(0)
  return (
    <div className="p-2">
      <div className=" p-2">

        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="flex items-start gap-2">
            <img
              width={54}
              src="https://images.blur.io/_blur-prod/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/4142-e95a5f542b67c752?w=64"
              className="rounded"
              alt="avatar"
            />
            <div className="text-gray-500 text-sm flex flex-col justify-center">
              <p className="text-white text-lg m-0">7DWMy...jwz</p>
              <p className="flex items-center gap-1 m-0">
                <CopyText
                  text={"966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb"}
                  startLength={10}
                />
                <Heart />
              </p>
            </div>
          </div>

          <Button className="mr-8" type="primary" size="large">
            <IconCopy style={{ width: "14px", fill: "#fff" }} />
            Copy Trade
          </Button>
        </div>
        <div className="flex items-center mb-2 bg-zinc-900 rounded-md p-2 relative">
         
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(0)}}>

            <img width={30} src="icons/solana.webp" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">Solana</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(1)}}>

            <img width={30} src="icons/ether.webp" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">ETH</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>
          <div className=" 
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}} onClick={()=>setIndex(2)}>

            <img width={30} src="icons/bsc.svg" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">BNB Chain</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(3)}}>

            <img width={30} src="icons/base.webp" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">Base</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(4)}}>

            <img width={30} src="icons/ton.webp" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">TON</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(5)}}>

            <img width={30} src="icons/arbitrum.svg" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">Arbitrum</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>
                    
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(6)}}>

            <img width={30} src="icons/linea.svg" />
            <div className="flex flex-col gap-1"><div className="text-gray-500">Linea</div><span className=" text-gray-500">$38,890.01</span></div>
          </div>   
          <div className="  
          p-1 cursor-pointer flex items-center justify-center
           gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(7)}}>

            <img width={30} src="icons/blast.webp" />
            <div className="flex flex-col gap-1"><div className="">Blast</div><span className="">$38,890.01</span></div>
          </div>   
          <div className="bg-zinc-800 border-l-4 border-[#5865f2] w-[120px] h-[48px] absolute ml-2" style={{left:0,transition:'all 0.3s',transform: `translateX(${index*120}px)`}} />
          
        </div>
        <div className="flex items-center mb-2 gap-2">
          <div className="w-[100px] border border-zinc-800">
            <PercentageSelector percentages={["7d", "30d"]} />
          </div>
          <div className="text-gray-500">
            1 min ago updated <SyncOutlined />
          </div>

        </div>

        <div className="grid grid-cols-3 justify-between mb-4 gap-2">
          <div className="flex-auto bg-zinc-900  rounded-md p-2">
            <div className="flex justify-end">
              <IconShare style={{ fill: "#fff", width: "14px" }} />
            </div>
            <InfoItem
              title={<span className="text-white text-sm">7D PnL</span>}
            >
              <span className="text-red-500 text-lg">-1.33%</span>{" "}
              <span className="text-lg">(-$898.2)</span>
            </InfoItem>
            <InfoItem
              title={<span className="text-white text-sm">Win Rate</span>}
            >
              <span className="text-white text-lg">33%</span>
            </InfoItem>
            <InfoItem
              title={<span className="text-white text-sm">Balance</span>}
            >
              <span className="text-white text-lg">$1,555.98</span>
            </InfoItem>
          </div>
          <div className="flex-auto bg-zinc-900 rounded-md p-2">
            <div className="flex justify-end">
              <IconShare style={{ fill: "#fff", width: "14px" }} />
            </div>
            <InfoItem title={<span className="text-white text-sm">PnL</span>}>
              <span className="text-white">
                7D TXs <span className="text-green-500">6</span>/
                <span className="text-red-500">6</span>
              </span>
            </InfoItem>
            <InfoItem title="Total PnL">
              <span className="text-green-500">+$14.9K (+21.09%)</span>
            </InfoItem>
            <InfoItem title="Unrealized Profits">
              <span className="text-red-500">-$2,963.35 </span>
            </InfoItem>
            <InfoItem title="7D Total Cost">
              <span className="text-white">$7,090.1</span>
            </InfoItem>
            <InfoItem title="7D Token Avg Cost">
              <span className="text-white">$10.1K</span>
            </InfoItem>
            <InfoItem title="7D Token Avg Realized Profits">
              <span className="text-green-500">+$1.49</span>
            </InfoItem>
            <InfoItem title="SOL Balance">
              <span className="text-green-500">
                <span className="text-white">14.63 SOL</span> ($2,096.91)
              </span>
            </InfoItem>
          </div>
          <div className="flex-auto bg-zinc-900 rounded-md p-2">
            <div className="flex justify-end">
              <IconShare style={{ fill: "#fff", width: "14px" }} />
            </div>
            <InfoItem
              title={
                <span className="text-white text-sm">Distribution (7)</span>
              }
            >
              {" "}
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-green-500"></div>
                  {`>500%`}
                </div>
              }
            >
              0
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-green-700"></div>
                  {`200%~500%`}
                </div>
              }
            >
              0
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-green-900"></div>
                  {`0%~200%`}
                </div>
              }
            >
              <span className="text-green-900">4 (57.14%)</span>
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-red-900"></div>
                  {`0%~200%`}
                </div>
              }
            >
              <span className="text-red-900">0</span>
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-red-500"></div>
                  {`0%~200%`}
                </div>
              }
            >
              <span className="text-red-500">3 (42.86%)</span>
            </InfoItem>
            <div className="flex rounded-full h-2 w-full bg-gray-700 overflow-hidden">
              <div className="bg-green-900   w-1/2"></div>
              <div className="bg-red-900 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <Tl />
    </div>
  );
};

export default Docspage;
