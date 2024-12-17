import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import { addBook, deleteOwnBook, getOwnBooks, recommendBooks } from 'services/books/books.api';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IBooksState } from './books.types';

const useBooks = create<IBooksState>()(
    devtools((set, get) => ({
        books: [],
        libraryBooks: [],
        page: 1,
        totalPages: 1,
        perPage: 10,
        isLoading: false,
        error: null,

        addBook: async (body, onSuccess) => {
            set({ isLoading: true, error: null });

            try {
                const data = await addBook(body);
                toast.success('Book added successfully');
                set({ libraryBooks: [...get().libraryBooks, data] });
                onSuccess();
            } catch (error) {
                if (isAxiosError(error)) {
                    set({ error: error.response?.data.message });
                    toast.error(error.response?.data.message);
                }
            } finally {
                set({ isLoading: false });
            }
        },

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

        getLibraryBooks: async (status) => {
            set({ isLoading: true, error: null });

            try {
                const data = await getOwnBooks(status);
                set({ libraryBooks: data });
            } catch (error) {
                if (isAxiosError(error)) {
                    set({ error: error.response?.data.message });
                }
            } finally {
                set({ isLoading: false });
            }
        },

        removeBook: async (id) => {
            set({ isLoading: true, error: null });

            try {
                await deleteOwnBook(id);
                toast.success('Book deleted successfully');
                set({ libraryBooks: get().libraryBooks.filter((item) => item._id !== id) });
            } catch (error) {
                if (isAxiosError(error)) {
                    set({ error: error.response?.data.message });
                }
            } finally {
                set({ isLoading: false });
            }
        },
    }))
);

export default useBooks;
