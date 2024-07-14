import { history } from "umi";
import { ListMenu as List } from "@/components";
import { LogoutOutlined } from "@ant-design/icons";
import User from "../User";
import styles from "./styles.less";
const Menu = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <a href="index.html">
          <img
            style={{ height: "40px" }}
            src="assets/Bold_Logo-white.svg"
            alt="Bold Exchange Logo"
          />
        </a>
      </div>
      <User />
      <div className="portfolio_wrapper">
        <List onSelect={(v) => v ?? history.push(v)}>
          <List.Item value="/portfolio">My Portfolio</List.Item>
          <List.Item value="">About</List.Item>
        </List>
      </div>
      <div className="trading_wrapper">
        <h5>Trading</h5>
        <List>
          <List.Item value="item1">ETH</List.Item>
          <List.Item value="item2">SOL</List.Item>
          <List.Item value="item3">Blast</List.Item>
          <List.Item value="item4">Base</List.Item>
        </List>
      </div>

      <div className={styles.affiliate_wrapper}>
        <List>
          <List.Item value="item1">Logout</List.Item>
          <List.Item value="item2">Update</List.Item>
        </List>
      </div>
    </div>
  );
};
export default Menu;
