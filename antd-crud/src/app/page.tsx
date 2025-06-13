import { Button, Layout, Space, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export default function Home() {
  return (
    <Layout style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header>
        <h1>This is header.</h1>
      </Header>
      <Content>
        <h1>This is content.</h1>
      </Content>
      <Footer>
        <h2>This is footer.</h2>
      </Footer>
    </Layout>
  );
}
