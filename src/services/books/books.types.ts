import { IBook } from 'types/books.types';

export interface IBooksResponse {
    results: IBook[];
    totalPages: number;
    page: number;
    perPage: number;
}

export interface IBooksParams {
    page: number;
    limit: number;
    title?: string;
    author?: string;
}
