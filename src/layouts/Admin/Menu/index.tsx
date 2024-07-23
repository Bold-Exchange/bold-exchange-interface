import { history } from "umi";
import { ListMenu as List } from "@/components";
import { BankOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
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
            src="/images/Bold_Logo-white.svg"
            alt="Bold Exchange Logo"
          />
        </a>
      </div>
      <User />
      <div className="portfolio_wrapper">
        <List onSelect={(v) => v && history.push(v)}>
          <List.Item value="/portfolio">
            <BankOutlined className="text-lg mr-2 text-gray-500" />
            My Portfolio
          </List.Item>
          <List.Item value="/">
            <UserOutlined className="text-lg mr-2 text-gray-500" />
            My Follow
          </List.Item>
        </List>
      </div>
      <div className="trading_wrapper">
        <h5>Trading</h5>
        <List>
          <List.Item value="item1">
            <img className="w-5 mr-2" src="icons/ether.webp" /> ETH
          </List.Item>
          <List.Item value="item2">
            <img className="w-5 mr-2" src="icons/solana.webp" />
            SOL
          </List.Item>
          <List.Item value="item3">
            <img className="w-5 mr-2" src="icons/blast.webp" />
            Blast
          </List.Item>
          <List.Item value="item4">
            <img className="w-5 mr-2" src="icons/base.webp" />
            Base
          </List.Item>
        </List>
      </div>

      <div className={styles.affiliate_wrapper}>
        <List>
          <List.Item value="item1">
            <LogoutOutlined className="text-lg mr-2 text-gray-500" /> Logout
          </List.Item>
        </List>
      </div>
    </div>
  );
};
export default Menu;
