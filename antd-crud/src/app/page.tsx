import { Button, Layout, Space, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import PigsManagerPage from "./pages/pigs-manager";
import LoginPage from "./pages/login";

export default function Home() {
  return (
    <>
      <PigsManagerPage />
    </>
  );
}
