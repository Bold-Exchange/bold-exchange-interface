import { useState } from "react";
interface Chain {
  id: number;
  name: string;
  icon: string;
  price: string;
}
const chains: Chain[] = [
  { id: 0, name: "Solana", icon: "icons/solana.webp", price: "$38,890.01" },
  { id: 1, name: "ETH", icon: "icons/ether.webp", price: "$38,890.01" },
  { id: 2, name: "BNB Chain", icon: "icons/bsc.svg", price: "$38,890.01" },
  { id: 3, name: "Base", icon: "icons/base.webp", price: "$38,890.01" },
  { id: 4, name: "TON", icon: "icons/ton.webp", price: "$38,890.01" },
  { id: 5, name: "Arbitrum", icon: "icons/arbitrum.svg", price: "$38,890.01" },
  { id: 6, name: "Linea", icon: "icons/linea.svg", price: "$38,890.01" },
  { id: 7, name: "Blast", icon: "icons/blast.webp", price: "$38,890.01" },
];
const Item: React.FC<{ chain: Chain; noPrice: boolean; isActive: boolean; onClick: () => void }> = ({ chain, isActive, noPrice, onClick }) => {
  return (
    <div
      className={`  
  p-1 cursor-pointer flex items-center justify-center
   gap-2 p-2 min-w-[120px] ${isActive && 'text-white'}`}
      style={{ zIndex: 1 }}
      onClick={onClick}
    >
      <img width={30} src={chain.icon} />
      <div className="flex flex-col gap-1">
        <div className={` ${isActive && 'text-white' || 'text-gray-500'}`}>{chain.name}</div>
        {!noPrice && <span className={` ${isActive && 'text-white' || 'text-gray-500'}`}>{chain.price}</span>}
      </div>
    </div>
  );
};

const Chains = ({ onChange, noPrice = false }) => {
  const [index, setIndex] = useState(0);
  const handleTabClick = (idx: number) => {
    setIndex(idx);
    onChange(idx);
  };
  return (
    <div className="flex items-center mb-2 bg-zinc-900 rounded-md p-2 relative overflow-auto">
      {chains.map((chain) => (
        <Item
          key={chain.id}
          chain={chain}
          noPrice={noPrice}
          isActive={index === chain.id}
          onClick={() => handleTabClick(chain.id)}
        />
      ))}
      <div
        className="bg-zinc-800 border-l-4 border-[#5865f2] w-[120px] h-[48px] absolute ml-2"
        style={{
          left: 0,
          transition: "all 0.3s",
          transform: `translateX(${index * 120}px)`,
        }}
      />
    </div>
  );
};
export default Chains;
