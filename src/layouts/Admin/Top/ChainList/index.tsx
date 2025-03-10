import { List } from "antd";
import styles from "./style.less";

const ChainList = () => {
  return (
    <List>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/ether.webp" /> ETH
      </List.Item>
      <List.Item className={styles.chainItem}>
          <img className="w-5 mr-2" src="icons/solana.webp" />
          SOL
      </List.Item>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/base.webp" />
        Base
      </List.Item>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/blast.webp" />
        Blast
      </List.Item>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/bsc.svg" />
        BNB
      </List.Item>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/ton.webp" />
        TON
      </List.Item>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/arbitrum.svg" />
        Arbitrum
      </List.Item>
      <List.Item className={styles.chainItem}>
        <img className="w-5 mr-2" src="icons/linea.svg" />
        Linea
      </List.Item>
    </List>
  );
};

export default ChainList;
