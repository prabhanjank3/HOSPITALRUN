import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { Navigate } from "react-router-dom";

export default ({ children }: any) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
 