import { history } from "umi";
import { ListMenu as List } from "@/components";
import {
  BankOutlined,
  BellOutlined,
  LogoutOutlined,
  ProductOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import User from "../User";
import styles from "./styles.less";
const Menu = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <a
          onClick={() => history.push("/")}
          className="flex justify-center items-center"
        >
          <img
            style={{ height: "40px" }}
            src="/logo.png"
            alt="Bold Exchange Logo"
          />
        </a>
      </div>
      {/* <User /> */}
      <List onSelect={(v) => v && history.push(v)}>
        <List.Item value="/portfolio">
          <WalletOutlined className="text-lg mr-2 text-gray-500" />
          Portfolio
        </List.Item>
        <List.Item value="/">
          <StarOutlined className="text-lg mr-2 text-gray-500" />
          WatchList
        </List.Item>
        <List.Item value="/alerts">
          <BellOutlined className="text-lg mr-2 text-gray-500" />
          Alerts
        </List.Item>
        <List.Item value="/multicharts">
          <ProductOutlined className="text-lg mr-2 text-gray-500" />
          Multicharts
        </List.Item>
      </List>
      <List>
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

      <div className={styles.affiliate_wrapper}>
        <List>
          <List.Item value="item1">
            <SettingOutlined className="text-lg mr-2 text-gray-500" /> Setting
          </List.Item>
          <List.Item value="item2">
            <LogoutOutlined className="text-lg mr-2 text-gray-500" /> Logout
          </List.Item>
        </List>
      </div>
    </div>
  );
};
export default Menu;
