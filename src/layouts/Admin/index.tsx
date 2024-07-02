import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "umi";
import classnames from "classnames";
import Menu from "./Menu";
import { Game } from "@/components";
import styles from "./index.less";
import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import Top from "./Top";
const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  const menuWidth = 320;
  const rightWidth = 320;
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const [rightVisible, setRightVisible] = useState<boolean>(true);

  return (
    <Layout className={styles.layout}>
      <Sider width={(menuVisible && menuWidth) || 0} className={styles.sider}>
        {/* <div
          className={styles.closeRight}
          onClick={() => setMenuVisible(!menuVisible)}
        >
          {(!menuVisible && <MenuUnfoldOutlined />) || <CloseOutlined />}
        </div> */}
        <Menu />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Top onToggle={(v: boolean) => setMenuVisible(v)} />
        </Header>
        <Layout>
          <Layout className="overflow-auto scrollbar-0">
            <Content className={styles.content}>
              <Outlet />
            </Content>
            <Footer className={styles.footer}></Footer>
          </Layout>

          <Sider
            width={(rightVisible && rightWidth) || 0}
            className={styles.sider}
            style={{ overflow: "auto" }}
          >
            {/* <div
              className={classnames(styles.closeRight, styles.closeLeft, {
                [`${styles.closeLeftClose}`]: !rightVisible,
              })}
              onClick={() => setRightVisible(!rightVisible)}
            >
              {(!rightVisible && <MenuFoldOutlined />) || <CloseOutlined />}
            </div> */}
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
