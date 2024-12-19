import { BookStatus, IBooksParams, IRecommendBooksResponse } from 'services/books/books.types';
import { IAddBookData, IBook } from 'types/books.types';

export interface IBooksState {
    books: IBook[];
    libraryBooks: IRecommendBooksResponse[];
    readingBook: IRecommendBooksResponse | null;
    page: number;
    totalPages: number;
    perPage: number;
    isLoading: boolean;
    error: string | null;

    addBook: (body: IAddBookData, onSuccess: () => void) => Promise<void>;
    getBooks: (params: IBooksParams) => Promise<void>;
    getLibraryBooks: (status?: BookStatus) => Promise<void>;
    getOneBook: (id: string) => Promise<void>;
    removeBook: (id: string) => Promise<void>;
    nextPage: () => void;
    prevPage: () => void;
}
