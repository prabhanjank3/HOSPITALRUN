import Login from "../components/auth/login";
import { useRoutes } from "react-router-dom";

const publicroutes = [{
    path:'/login',
    element:<Login />
}]

export default () => {
    const publicrouter = useRoutes(publicroutes);
    return publicrouter;
}

