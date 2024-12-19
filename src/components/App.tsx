import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LibraryPage from 'pages/LibraryPage';
import LoginPage from 'pages/LoginPage';
import ReadingPage from 'pages/ReadingPage';
import RecommendedPage from 'pages/RecommendedPage';
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
                    <Route path="recommended" element={<RecommendedPage />} />
                    <Route path="library" element={<LibraryPage />} />
                    <Route path="reading/:bookId" element={<ReadingPage />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
