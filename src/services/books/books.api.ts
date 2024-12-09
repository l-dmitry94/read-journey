import instance from 'services/axios.config';
import ENDPOINTS from 'services/endpoints';

import { IBooksResponse } from './books.types';

export const recommendBooks = async (params: {
    page: number;
    limit: number;
    title?: string;
    author?: string;
}) => {
    const response = await instance.get<IBooksResponse>(ENDPOINTS.books.recommend, {
        params,
    });
    return response.data;
};
