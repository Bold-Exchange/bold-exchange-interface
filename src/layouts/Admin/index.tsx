import React, { useState } from "react";
import { Flex, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
};

const App: React.FC = () => {
  const menuWidth = 320;
  const rightWidth = 320;
  const [menuVisible, setMenuVisible] = useState<boolean>(true);
  const [rightVisible, setRightVisible] = useState<boolean>(true);

  return (
    <Layout style={layoutStyle}>
      <Sider width={(menuVisible && menuWidth) || 0} style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header
          onClick={() => setMenuVisible(!menuVisible)}
          style={headerStyle}
        >
          Header
        </Header>
        <Layout>
          <Layout>
            <Content style={contentStyle}>Content</Content>
            <Footer
              onClick={() => setRightVisible(!rightVisible)}
              style={footerStyle}
            >
              Footer
            </Footer>
          </Layout>

          <Sider width={(rightVisible && rightWidth) || 0} style={siderStyle}>
            Sider
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
