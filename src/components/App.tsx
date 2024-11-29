import { Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
    );
};

export default App;
