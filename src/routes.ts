/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components/views for Admin layouts
import DashboardPage from "./views/Dashborad/Dashboard";
import Icons from "./views/Icons/Icons";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/app"
  },
  {
    path: "/operators",
    name: "Operators",
    icon: SupervisorAccountIcon,
    component: Icons,
    layout: "/app"
  }
/**
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layouts: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layouts: "/admin"
  },**/
];

export default dashboardRoutes;
