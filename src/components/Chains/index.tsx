import { useState } from "react"

const Chains=({onChange})=>{
    const [index,setIndex]=useState(0)
    return   <div className="flex items-center mb-2 bg-zinc-900 rounded-md p-2 relative">
         
    <div className="  
    p-1 cursor-pointer flex items-center justify-center
     gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(0);onChange(0)}}>

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
     gap-2 p-2 w-[120px]" style={{zIndex:1}}  onClick={()=>{setIndex(3);onChange(3)}}>

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
}
export default Chains;