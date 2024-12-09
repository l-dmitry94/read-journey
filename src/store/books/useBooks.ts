import { isAxiosError } from 'axios';
import { recommendBooks } from 'services/books/books.api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IBooksState } from './books.types';

const useBooks = create<IBooksState>()(
    devtools((set) => ({
        books: [],
        page: 1,
        totalPages: 1,
        perPage: 10,
        isLoading: false,
        error: null,

        getBooks: async (page, limit) => {
            set({ isLoading: true, error: null });

            try {
                const data = await recommendBooks(page, limit);
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

        changeLimit: (limit) => set({ perPage: limit }),
    }))
);

export default useBooks;
