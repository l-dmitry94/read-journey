import { ILoginData, IRegisterData } from 'types/auth.types';

interface IUser {
    name: string;
    email: string;
}
export interface IAuthState {
    user: IUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null;

    signup: (body: IRegisterData) => Promise<void>;
    signin: (body: ILoginData) => Promise<void>;
    current: () => Promise<void>;
    signout: () => Promise<void>;
    updateTokens: (accessToken: string, refreshToken: string) => void;
}
