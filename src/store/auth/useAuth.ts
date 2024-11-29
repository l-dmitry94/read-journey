import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { currentRequest, signinRequest, signoutRequest, signupRequest } from 'services/auth.api';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { IAuthState } from './auth.types';

const useAuth = create<IAuthState>()(
    persist(
        devtools((set, get) => ({
            user: null,
            token: null,
            isLoggedIn: false,
            isLoading: false,
            error: null,

            signup: async (body) => {
                set({ isLoading: true, error: null });

                try {
                    const data = await signupRequest(body);
                    set({
                        user: { name: data.name, email: data.email },
                        token: data.token,
                        isLoggedIn: true,
                    });
                    toast.success('Registration successful');
                } catch (error) {
                    if (isAxiosError(error)) {
                        set({ error: error.response?.data.message });
                        toast.error(error.response?.data.message);
                    }
                } finally {
                    set({ isLoading: false });
                }
            },
            signin: async (body) => {
                set({ isLoading: true, error: null });

                try {
                    const data = await signinRequest(body);
                    set({
                        user: { name: data.name, email: data.email },
                        token: data.token,
                        isLoggedIn: true,
                    });
                    toast.success('Login successful');
                } catch (error) {
                    if (isAxiosError(error)) {
                        set({ error: error.response?.data.message });
                        toast.error(error.response?.data.message);
                    }
                } finally {
                    set({ isLoading: false });
                }
            },
            current: async () => {
                set({ isLoading: true, error: null });

                try {
                    const token = get().token!;
                    const data = await currentRequest(token);
                    set({
                        user: { name: data.name, email: data.email },
                        token: data.token,
                        isLoggedIn: true,
                    });
                } catch (error) {
                    if (isAxiosError(error)) {
                        set({ error: error.response?.data.message });
                    }
                } finally {
                    set({ isLoading: false });
                }
            },
            signout: async () => {
                set({ isLoading: true, error: null });

                try {
                    await signoutRequest();
                    set({ user: null, token: null, isLoggedIn: false });
                    toast.success('Logout successful');
                } catch (error) {
                    if (isAxiosError(error)) {
                        set({ error: error.response?.data.message });
                        toast.error(error.response?.data.message);
                    }
                } finally {
                    set({ isLoading: false });
                }
            },
        })),
        {
            name: 'auth',
            partialize: (state) => ({
                token: state.token,
            }),
        }
    )
);

export default useAuth;
