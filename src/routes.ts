import Dashboard from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DashboardPage from "./views/Dashborad/Dashboard";
import Operators from "./views/Operators/Operators";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/app",
  },
  {
    path: "/operators",
    name: "Operators",
    icon: SupervisorAccountIcon,
    component: Operators,
    layout: "/app",
  },
];

export default dashboardRoutes;
