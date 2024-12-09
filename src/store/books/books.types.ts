import { IBooksParams } from 'services/books/books.types';
import { IBook } from 'types/books.types';

export interface IBooksState {
    title: string | undefined;
    author: string | undefined;
    books: IBook[];
    page: number;
    totalPages: number;
    perPage: number;
    isLoading: boolean;
    error: string | null;

    getBooks: (params: IBooksParams) => Promise<void>;
    nextPage: () => void;
    prevPage: () => void;
    setFilter: (title: string | undefined, author: string | undefined) => void;
    resetFilter: (limit: number) => void;
}
