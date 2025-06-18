import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { loginHeaderStyle } from "../style";

export const LoginPage = () => {
  return (
    <>
      <Layout>
        <Content>
          <Header style={loginHeaderStyle}>Hello</Header>
        </Content>
      </Layout>
    </>
  );
};
