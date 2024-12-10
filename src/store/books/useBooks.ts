import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { recommendBooks } from 'services/books/books.api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IBooksState } from './books.types';

const useBooks = create<IBooksState>()(
    devtools((set, get) => ({
        books: [],
        page: 1,
        totalPages: 1,
        perPage: 10,
        isLoading: false,
        error: null,

        getBooks: async (params) => {
            set({ isLoading: true, error: null });

            try {
                const data = await recommendBooks(params);
                if (!data.results.length) {
                    toast.warn('Not found');
                }
                set({
                    books: data.results,
                    page: data.page,
                    totalPages: data.totalPages,
                    perPage: data.perPage,
                });
            } catch (error) {
                if (isAxiosError(error)) {
                    set({ error: error.response?.data.message });
                }
            } finally {
                set({ isLoading: false });
            }
        },

        nextPage: () => {
            set({ page: get().page + 1 });
        },

        prevPage: () => {
            set({ page: get().page - 1 });
        },
    }))
);

export default useBooks;
