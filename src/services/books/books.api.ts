import instance from 'services/axios.config';
import ENDPOINTS from 'services/endpoints';

import { IBooksParams, IBooksResponse, IRecommendBooksResponse } from './books.types';

export const recommendBooks = async (params: IBooksParams) => {
    const response = await instance.get<IBooksResponse>(ENDPOINTS.books.recommend, {
        params,
    });
    return response.data;
};

export const addRecommendBook = async (id: string) => {
    const response = await instance.post<IRecommendBooksResponse>(
        `${ENDPOINTS.books.addRecommend}/${id}`
    );
    return response.data;
};
