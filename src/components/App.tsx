import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import useAuth from 'store/auth/useAuth';

import SharedLayout from './shared/SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const App = () => {
    const { current } = useAuth();

    useEffect(() => {
        current();
    }, [current]);

    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Navigate to="recommended" replace />} />
                    <Route path="recommended" element={<h1>Recommended</h1>} />
                    <Route path="library" element={<h1>Library</h1>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
