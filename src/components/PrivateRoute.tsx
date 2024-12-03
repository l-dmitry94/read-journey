import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'store/auth/useAuth';

const PrivateRoute = () => {
    const { isLoggedIn, accessToken } = useAuth();
    if (!isLoggedIn && accessToken) {
        return <p>...Loading</p>;
    }

    if (!isLoggedIn && !accessToken) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
