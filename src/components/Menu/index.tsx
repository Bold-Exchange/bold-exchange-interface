import { ListMenu as List } from "@/components";
import styles from "./styles.less";
const Menu = ({ setNetwork }: any) => {
  const handleSelect = (value: string) => {
    const networkMap: { [key: string]: string } = {
      item1: 'eth',
      item2: 'solana',
      item3: 'blast',
      item4: 'base',
      item5: 'bsc',
      item6: 'ton',
      item7: 'arbitrum',
      item8: 'linea'
    };
    setNetwork(networkMap[value]);
  };

  return (
    <div className={styles.sidebar}>
      <List onSelect={handleSelect} defaultValue="item1">
        <List.Item value="item1">
          <img className="w-5 mr-2" src="icons/ether.webp" /> ETH
        </List.Item>
        <List.Item value="item2">
          <img className="w-5 mr-2" src="icons/solana.webp" />
          SOL
        </List.Item>
        <List.Item value="item4">
          <img className="w-5 mr-2" src="icons/base.webp" />
          Base
        </List.Item>
        <List.Item value="item3">
          <img className="w-5 mr-2" src="icons/blast.webp" />
          Blast
        </List.Item>
        <List.Item value="item5">
          <img className="w-5 mr-2" src="icons/bsc.svg" />
          BNB
        </List.Item>
        <List.Item value="item6">
          <img className="w-5 mr-2" src="icons/ton.webp" />
          TON
        </List.Item>
        <List.Item value="item7">
          <img className="w-5 mr-2" src="icons/arbitrum.svg" />
          Arbitrum
        </List.Item>
        <List.Item value="item8">
          <img className="w-5 mr-2" src="icons/linea.svg" />
          Linea
        </List.Item>
      </List>
    </div>
  );
};
export default Menu;
