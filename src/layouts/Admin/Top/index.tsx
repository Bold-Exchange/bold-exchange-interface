import { useEffect, useState } from "react";
import classNames from "classnames";
import "./styles.less";
import { Button } from "@/components";
import { Input } from "antd";
const Top = (props: any) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="container-fluid top_bar">
      <div className="top_bar_wrapper d-flex align-items-center justify-content-between">
        <div className="search_bar d-flex align-items-center flex justify-center flex-auto">
          <Input
            className="w-1/4 p-2"
            placeholder="Search token/contract/wallet"
          />
        </div>
        <div className="user_bar d-flex align-items-center justify-content-end">
          <div className="search_wrapper">
            <a href="javascript:void(0)" className="search_sm d-none">
              <i className="flaticon-loupe d-flex align-items-center"></i>
            </a>
          </div>
          <div className="dollar_wrapper">
            <a href="#">$500.00</a>
          </div>
          <div className="wallet_wrapper">
            <a href="#">
              <i className="flaticon-wallet-filled-money-tool"></i>
            </a>
          </div>
          <div className="notification_wrapper">
            <a href="#">
              <i className="flaticon-bell"></i>
            </a>
          </div>
          <div className="profile_wrapper d-flex align-items-center">
            <div className="img_wrapper">
              <a href="#">
                <img
                  src="assets/images/user/profile-sm.png"
                  alt="Profile Picture"
                />
              </a>
            </div>
            <div className="drop">
              <a href="javascript:void(0)" className="profile_link disable">
                Ed Walsh <i className="fas fa-caret-down"></i>
              </a>
              <div className="drop_content">
                <a href="user-about.html">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
