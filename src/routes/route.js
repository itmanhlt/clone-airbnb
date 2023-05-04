import LayoutHomePage from "../Layouts/LayoutHomePage";
import HomePage from "../Pages/User/HomePage/HomePage";
import LogInPage from "../Pages/User/LogInPage/LogInPage";
import LogUp from '../Pages/User/LogUpPage/LogUpPage';
import PersonnalInfoPage from "../Pages/User/PersonalInfoPage/PersonnalInfoPage";
import RoomByCityPage from '../Pages/User/RoomByCityPage/RoomBycityPage'
import RoomDetailPage from '../Pages/User/RoomDetailPage/RoomDetailPage'
import TicketByUserPage from '../Pages/User/TicketsByUserPage/TicketsByUserPage'

export const routes = [
    {
        url: '/',
        component: <LayoutHomePage Components={HomePage} />
    },
    {
        url: '/homePage',
        component: <LayoutHomePage Components={HomePage} />
    },
    {
        url: '/login',
        component: <LogInPage />
    },
    {
        url: '/register',
        component: <LogUp />
    },
    {
        url: '/PersonnalInfoPage',
        component: <LayoutHomePage Components={PersonnalInfoPage} />
    },
    {
        url: '/RoomByCityPage',
        component: <LayoutHomePage Components={RoomByCityPage} />
    },
    {
        url: '/RoomDetailPage',
        component: <LayoutHomePage Components={RoomDetailPage} />
    },
    {
        url: '/TicketByUserPage',
        component: <LayoutHomePage Components={TicketByUserPage} />
    },

]