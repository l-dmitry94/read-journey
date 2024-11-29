import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'store/auth/useAuth';

const PublicRoute = () => {
    const { isLoggedIn, token } = useAuth();

    if (!isLoggedIn && token) {
        return <p>Loading...</p>;
    }

    if (isLoggedIn) {
        return <Navigate to="/recommended" />;
    }

    return <Outlet />;
};

export default PublicRoute;
