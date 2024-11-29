import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

import SharedLayout from './shared/SharedLayout';

const App = () => {
    return (
        <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/" element={<SharedLayout />}>
                <Route path="recommended" element={<h1>Recommended</h1>} />
            </Route>
        </Routes>
    );
};

export default App;
