import { IBook } from 'types/books.types';

export interface IBooksResponse {
    results: IBook[];
    totalPages: number;
    page: number;
    perPage: number;
}

export interface IRecommendBooksResponse extends Omit<IBook, 'recommend'> {
    status: 'unread' | 'in-progress' | 'done';
    owner: string;
    progress: [];
}

export interface IBooksParams {
    page: number;
    limit: number;
    title?: string;
    author?: string;
}
