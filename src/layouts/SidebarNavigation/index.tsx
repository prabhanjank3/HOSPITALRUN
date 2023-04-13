import SidebarLayout from "./SidebarLayout";
import { getRoutes } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default () => {
    const role = useSelector((state:RootState) => state.user.currentUser?.role)
    const sidebarRoutes = getRoutes();
    return <SidebarLayout sidebarRoutes={sidebarRoutes[role]} />
}