import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "umi";
import classnames from "classnames";
import Menu from "./Menu";
import { Game } from "@/components";
import Trigger from "./Trigger";
import styles from "./index.less";
import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import Top from "./Top";
const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  const menuWidth = 320;
  const rightWidth = 320;
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [rightVisible, setRightVisible] = useState<boolean>(false);

  return (
    <Layout className={styles.layout}>
      <Sider
        collapsed={menuVisible}
        collapsedWidth={0}
        width={160}
        className={styles.sider}
      >
        {/* <div
          className={styles.closeRight}
          onClick={() => setMenuVisible(!menuVisible)}
        >
          {(!menuVisible && <MenuUnfoldOutlined />) || <CloseOutlined />}
        </div> */}
        <Menu />
        <Trigger
          direction="left"
          onToggle={() => setMenuVisible(!menuVisible)}
          isOpen={!menuVisible}
        />
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
            collapsed={rightVisible}
            collapsedWidth={0}
            width={320}
            className={styles.sider}
            style={{ zIndex: 0 }}
          >
            <div style={{ overflow: "auto", height: "100%" }}>
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
            </div>
            <Trigger
              direction="right"
              onToggle={() => setRightVisible(!rightVisible)}
              isOpen={!rightVisible}
            />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
