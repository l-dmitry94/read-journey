import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Navigate to="register" />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
    );
};

export default App;
