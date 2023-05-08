import Layout from "../Layouts/Layout";
import LayoutHomePage from "../Layouts/LayoutHomePage";
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
    url: "/RoomByCityPage",
    component: <Layout Components={RoomByCityPage} />,
  },
  {
    url: "/RoomDetailPage",
    component: <Layout Components={RoomDetailPage} />,
  },
  {
    url: "/TicketByUserPage",
    component: <Layout Components={TicketByUserPage} />,
  },
];
