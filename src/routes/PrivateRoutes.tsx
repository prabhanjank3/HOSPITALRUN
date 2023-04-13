// import Dashboard from "../pages/dashboard/Dashboard";
import { useRoutes } from "react-router-dom";
import Consultation from "../pages/Consultation";
import User from "../components/users/New/index";
import Dashboard from "../layouts/SidebarNavigation";

const privateRoutes = [
    {
    path:'/',
    element: (<Dashboard />)
    },
    {
      path:"/opd/consultation/:appointmentid",
      element: <Consultation />    
    },
    {
      path:"/user/new",
      element: <User />
    },
    
]

export default () => {
    const privaterouter = useRoutes(privateRoutes);
    return privaterouter;
}

