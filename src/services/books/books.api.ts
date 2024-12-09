import instance from 'services/axios.config';
import ENDPOINTS from 'services/endpoints';

import { IBooksResponse } from './books.types';

export const recommendBooks = async (page: number = 1, limit: number = 10) => {
    const response = await instance.get<IBooksResponse>(ENDPOINTS.books.recommend, {
        params: { page, limit },
    });
    return response.data;
};
