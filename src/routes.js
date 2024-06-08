import Auth from "./pages/Auth"
import Contacts from "./pages/Contacts"
import News from "./pages/News"
import OrderForm from "./pages/OrderForm"
import Profile from "./pages/Profile"
import ServiceList from "./pages/ServiceList"
import { CONTACTS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDER_FORM_ROUTE,  PROFILE_ROUTE, REGISTRATION_ROUTE, SERVICELIST_ROUTE} from "./utils/consts"


export const authRoutes = [ //маршруты, куда может перейти авторизованный пользователь
    {
        path: PROFILE_ROUTE, ///profile
        Component: Profile
    },
    {
        path: ORDER_FORM_ROUTE,
        Component: OrderForm
    },
]

export const publicRoutes = [ //маршруты, куда может перейти НЕавторизованный пользователь
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: SERVICELIST_ROUTE,
        Component: ServiceList
    },
    {
        path: MAIN_ROUTE,
        Component: News
    }
]