import { IBook } from 'types/books.types';

export interface IBooksResponse {
    results: IBook[];
    totalPages: number;
    page: number;
    perPage: number;
}

export interface IBooksParams {
    title: string | undefined;
    author: string | undefined;
    page: number;
    limit: number;
}
