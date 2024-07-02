import { ListMenu as List } from "@/components";
import styles from "./styles.less";
const Menu = () => {
  return (
    <div className="sidebar">
      <div className={styles.logo}>
        <a href="index.html">
          <img
            style={{ height: "40px" }}
            src="assets/Bold_Logo-white.svg"
            alt="Bold Exchange Logo"
          />
        </a>
      </div>
      <div className="user_wrapper">
        <div className="profile_wrapper text-center">
          <div className="profile_content">
            <a href="user-about.html" className="profile">
              <img
                src="assets/images/user/profile-sm.png"
                alt="Profile Picture"
              />
            </a>
            <span className="d-flex align-items-center justify-content-center">
              12
            </span>
          </div>
          <h5 className="text-center">
            <a href="user-about.html">ED WALSH</a>
          </h5>
        </div>
        <div className="follow_wrapper d-flex align-items-center justify-content-around">
          <div className="follower d-flex align-items-center justify-content-between">
            <div className="icon">
              <i className="flaticon-user-profile"></i>
            </div>
            <div className="amount">
              <a href="user-about.html">2,239</a>
              <p>FOLLOWERS</p>
            </div>
          </div>
          <div className="following d-flex align-items-center justify-content-between">
            <div className="icon">
              <i className="flaticon-user-profile"></i>
            </div>
            <div className="amount">
              <a href="user-about.html">5,339</a>
              <p>FOLLOWING</p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_wrapper">
        <List>
          <List.Item value="item1">My Portfolio</List.Item>
          <List.Item value="item2">About</List.Item>
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
          <List.Item value="item1">Item 1</List.Item>
          <List.Item value="item2">Item 2</List.Item>
          <List.Item value="item3">Item 3</List.Item>
        </List>
      </div>
    </div>
  );
};
export default Menu;
