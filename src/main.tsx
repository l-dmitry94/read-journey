import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import toastOptions from 'configs/react-toastify';

import App from 'components/App';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <ToastContainer {...toastOptions} limit={1} />
        </BrowserRouter>
    </StrictMode>
);
