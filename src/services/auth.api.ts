import useAuth from 'store/auth/useAuth';
import { ILoginData, IRegisterData } from 'types/auth.types';

import instance from './axios.config';
import ENDPOINTS from './endpoints';

const setToken = (token?: string) => {
    if (token) {
        return (instance.defaults.headers.authorization = `Bearer ${token}`);
    }
    instance.defaults.headers.authorization = '';
};

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            const refreshToken = useAuth.getState().refreshToken;
            if (refreshToken) {
                const response = await instance.get(ENDPOINTS.auth.refresh);
                useAuth.getState().updateTokens(response.data.token, response.data.refreshToken);
                setToken(response.data.token);
                return instance(error.config);
            }
        }
    }
);

export const signupRequest = async (body: IRegisterData) => {
    const response = await instance.post(ENDPOINTS.auth.signup, body);
    setToken(response.data.token);
    return response.data;
};

export const signinRequest = async (body: ILoginData) => {
    const response = await instance.post(ENDPOINTS.auth.signin, body);
    setToken(response.data.token);
    return response.data;
};

export const currentRequest = async (token: string) => {
    setToken(token);
    try {
        const response = await instance.get(ENDPOINTS.auth.current);
        return response.data;
    } catch (error) {
        setToken();
        throw error;
    }
};

export const signoutRequest = async () => {
    const response = await instance.get(ENDPOINTS.auth.signout);
    setToken();
    return response.data;
};
