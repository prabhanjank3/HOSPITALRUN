import PrivateRoute from "./AuthGaurd";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default () => {
    const Private = <PrivateRoute><PrivateRoutes/></PrivateRoute>
    const Public = <PublicRoutes />
    console.log(Private)
    return <>{[Private,Public]}</>;
}

