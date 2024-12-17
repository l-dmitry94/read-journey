import instance from 'services/axios.config';
import ENDPOINTS from 'services/endpoints';
import { IAddBookData } from 'types/books.types';

import { IBooksParams, IBooksResponse, IRecommendBooksResponse, IRemoveBook } from './books.types';

export const recommendBooks = async (params: IBooksParams) => {
    const response = await instance.get<IBooksResponse>(ENDPOINTS.books.recommend, {
        params,
    });
    return response.data;
};

export const addRecommendBook = async (id: string) => {
    const response = await instance.post<IRecommendBooksResponse>(`${ENDPOINTS.books.add}/${id}`);
    return response.data;
};

export const getOwnBooks = async (status?: string) => {
    const response = await instance.get<IRecommendBooksResponse[]>(ENDPOINTS.books.own, {
        params: { status },
    });
    return response.data;
};

export const deleteOwnBook = async (id: string) => {
    const response = await instance.delete<IRemoveBook>(`${ENDPOINTS.books.remove}/${id}`);
    return response.data;
};

export const addBook = async (body: IAddBookData) => {
    const response = await instance.post<IRecommendBooksResponse>(ENDPOINTS.books.add, body);
    return response.data;
};
