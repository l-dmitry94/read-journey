import { IBook } from 'types/books.types';

export interface IBooksResponse {
    results: IBook[];
    totalPages: number;
    page: number;
    perPage: number;
}
