import AdminDatPhong from "../AdminDatPhongPage/AdminDatPhong";
import AdminThongTinPhong from "../AdminThongTinPhongPage/AdminThongTinPhong";
import AdminUserPage from "../AdminUserPage/AdminUserPage";
import AdminViTri from "../AdminViTriPage/AdminViTri";
import Layout from "../Layouts/Layout";
import LayoutAdmin from "../Layouts/LayoutAdmin";
import LayoutHomePage from "../Layouts/LayoutHomePage";
import ErrorPage from "../Pages/User/ErrorPage/ErrorPage";
import HomePage from "../Pages/User/HomePage/HomePage";
import LogInPage from "../Pages/User/LogInPage/LogInPage";
import LogUp from "../Pages/User/LogUpPage/LogUpPage";
import PersonnalInfoPage from "../Pages/User/PersonalInfoPage/PersonnalInfoPage";
import RoomByCityPage from "../Pages/User/RoomByCityPage/RoomBycityPage";
import RoomDetailPage from "../Pages/User/RoomDetailPage/RoomDetailPage";
import TicketByUserPage from "../Pages/User/TicketsByUserPage/TicketsByUserPage";

export const routes = [
  {
    url: "/",
    component: <LayoutHomePage Components={HomePage} />,
  },
  {
    url: "/homePage",
    component: <LayoutHomePage Components={HomePage} />,
  },
  {
    url: "/login",
    component: <LogInPage />,
  },
  {
    url: "/register",
    component: <LogUp />,
  },
  {
    url: "/PersonnalInfoPage",
    component: <Layout Components={PersonnalInfoPage} />,
  },
  {
    url: "/RoomByCityPage/:id",
    component: <Layout Components={RoomByCityPage} />,
  },
  {
    url: "/RoomDetailPage/:id",
    component: <Layout Components={RoomDetailPage} />,
  },
  {
    url: "/TicketByUserPage",
    component: <Layout Components={TicketByUserPage} />,
  },
  {
    url: "*",
    component: <Layout Components={ErrorPage} />,
  },
  {
    url: "/user-admin",
    component: <LayoutAdmin Component={AdminUserPage} />,
  },
  {
    url: "/datphong-admin",
    component: <LayoutAdmin Component={AdminDatPhong} />,
  },
  {
    url: "/thongtinphong-admin",
    component: <LayoutAdmin Component={AdminThongTinPhong} />,
  },
  {
    url: "/vitri-admin",
    component: <LayoutAdmin Component={AdminViTri} />,
  },
];
