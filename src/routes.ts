import Dashboard from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import DashboardPage from "./views/Dashborad/Dashboard";
import Operators from "./views/Operators/Operators";
import Weapons from "./views/Weapons/Weapons";

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
  {
    path: "/weapons",
    name: "Weapons",
    icon: FlashOnIcon,
    component: Weapons,
    layout: "/app",
  },
];

export default dashboardRoutes;
