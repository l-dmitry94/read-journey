import { IBook } from 'types/books.types';

export interface IBooksResponse {
    results: IBook[];
    totalPages: number;
    page: number;
    perPage: number;
}

export enum BookStatus {
    unread = 'unread',
    'in-progress' = 'in-progress',
    done = 'done',
}

export interface IRecommendBooksResponse extends Omit<IBook, 'recommend'> {
    status: BookStatus;
    owner: string;
    progress: [];
}

export interface IBooksParams {
    page: number;
    limit: number;
    title?: string;
    author?: string;
}

export interface IRemoveBook {
    id: string;
    message: string;
}
