import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "控制台",
    navbarName: "Material 控制台",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "用户个人信息",
    navbarName: "个人信息",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "字体",
    navbarName: "字体",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "图标",
    navbarName: "图标",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/notifications",
    sidebarName: "通知提醒",
    navbarName: "通知提醒",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
