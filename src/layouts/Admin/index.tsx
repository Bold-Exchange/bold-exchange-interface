import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "umi";
import classnames from "classnames";
import Menu from "./Menu";
import { Game, Icon, TagSelector } from "@/components";
import Trigger from "./Trigger";
import styles from "./index.less";
import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import Top from "./Top";
import { calc } from "antd/es/theme/internal";
const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  const menuWidth = 320;
  const rightWidth = 320;
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [rightVisible, setRightVisible] = useState<boolean>(true);

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
            <Footer className={styles.footer}>1</Footer>
          </Layout>

          <Sider
            collapsed={rightVisible}
            collapsedWidth={0}
            width={320}
            className={styles.sider}
            style={{ zIndex: 0 }}
          >
            <div className="bg-gray-700 p-1">
              <div className="flex items-center gap-2 text-white">
                <div className="font-bold flex items-center gap-1">
                  <Icon.Jiaonang />
                  Pump
                </div>
                <div className="font-bold flex items-center gap-1 opacity-50">
                  <Icon.Moon />
                  Moonshot
                </div>
                <div className="font-bold flex items-center gap-1 opacity-50">
                  <Icon.Booster width={24} />
                  Booster
                </div>
              </div>
            </div>
            <div className="text-white px-2">
              <TagSelector
                tags={["Pump", "New Creation", "Completing"]}
                onTagSelect={(e: string) => {
                  // setV(e != "Pump");
                }}
              />
            </div>

            <div style={{ overflow: "auto", height: "calc(100% - 60px)" }}>
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
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
