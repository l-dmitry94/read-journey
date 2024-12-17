import useAuth from 'store/auth/useAuth';
import { ILoginData, IRegisterData } from 'types/auth.types';

import instance from '../axios.config';
import ENDPOINTS from '../endpoints';

import { IAuthResponse, ICurrentResponse, ISignoutResponse } from './auth.types';

const setToken = (token?: string) => {
    if (token) {
        return (instance.defaults.headers.authorization = `Bearer ${token}`);
    }
    instance.defaults.headers.authorization = '';
};

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401) {
            try {
                useAuth.getState().signout();
                return instance(originalRequest);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

// instance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             const refreshToken = useAuth.getState().refreshToken;
//             if (refreshToken) {
//                 try {
//                     const response = await instance.get<ITokenResponse>(ENDPOINTS.auth.refresh, {
//                         headers: {
//                             Authorization: `Bearer ${refreshToken}`,
//                         },
//                     });
//                     useAuth
//                         .getState()
//                         .updateTokens(response.data.token, response.data.refreshToken);
//                     setToken(response.data.token);

//                     return instance(originalRequest);
//                 } catch (refreshError) {
//                     useAuth.getState().signout();
//                     return Promise.reject(refreshError);
//                 }
//             }
//         }

//         return Promise.reject(error);
//     }
// );

export const signupRequest = async (body: IRegisterData) => {
    const response = await instance.post<IAuthResponse>(ENDPOINTS.auth.signup, body);
    setToken(response.data.token);
    return response.data;
};

export const signinRequest = async (body: ILoginData) => {
    const response = await instance.post<IAuthResponse>(ENDPOINTS.auth.signin, body);
    setToken(response.data.token);
    return response.data;
};

export const currentRequest = async (token: string) => {
    setToken(token);
    const response = await instance.get<ICurrentResponse>(ENDPOINTS.auth.current);
    return response.data;
};

export const signoutRequest = async () => {
    const response = await instance.post<ISignoutResponse>(ENDPOINTS.auth.signout);
    setToken();
    return response.data;
};
