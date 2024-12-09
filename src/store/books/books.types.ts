import { IBook } from 'types/books.types';

export interface IBooksState {
    books: IBook[];
    page: number;
    totalPages: number;
    perPage: number;
    isLoading: boolean;
    error: string | null;

    getBooks: (page: number, limit: number) => Promise<void>;
    changeLimit: (limit: number) => void;
}
