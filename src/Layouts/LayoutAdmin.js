import {
  PieChartOutlined,
  NotificationOutlined,
  DesktopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { localService } from "../services/LocalService";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <NavLink to="/user-admin">Quản Lí Người Dùng</NavLink>,
    "1",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/datphong-admin">Quản Lí Đặt Phòng</NavLink>,
    "2",
    <DesktopOutlined />
  ),
  getItem(
    <NavLink to="/thongtinphong-admin">Quản Lí Phòng</NavLink>,
    "3",
    <NotificationOutlined />
  ),
  getItem(
    <NavLink to="/vitri-admin">Quản Lí Vị Trí</NavLink>,
    "4",
    <UserOutlined />
  ),
];
const LayoutAdmin = ({ Component }) => {
  const [collapsed, setCollapsed] = useState(false);
  let user = localService.get();
  useEffect(() => {
    console.log(user.user.role);
    if (!user || user.user.role === "USER") {
      window.location.href = "/";
    }
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            textAlign: "center",
          }}
        >
          <NavLink className="text-xl text-white" to="/">
            Trang Chủ
          </NavLink>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <h1
            className="font-medium text-black pl-2 mx-auto flex justify-center items-center"
            style={{ fontSize: "25px" }}
          >
            DASHBOARD
          </h1>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "10px 0",
            }}
          ></Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Component />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Person Is Creator AdminPage
          <a
            className="pl-2"
            href="https://www.facebook.com/profile.php?id=100024636332556"
          >
            https://www.facebook.com/profile.php?id=100024636332556
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;
