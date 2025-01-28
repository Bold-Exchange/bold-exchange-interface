import request from '@/utils/request';
import type {
  PaginationParams,
  NetworkParams,
  DexParams,
  PoolParams,
  TokenParams,
  OHLCVParams,
  PoolsResponse,
  TokenResponse,
  OHLCVResponse
} from './types';

const BASE_URL = 'https://api.bold.exchange/api';

export const api = {
  // Public endpoints
  getTrendingPools: async ({ network }: NetworkParams, { page = 1 }: PaginationParams = {}) => {
    return request.public.get<PoolsResponse>(`${BASE_URL}/networks/${network}/trending_pools`, {
      params: { page }
    });
  },

  getPools: async ({ network }: NetworkParams, { page = 1 }: PaginationParams = {}) => {
    return request.public.get<PoolsResponse>(`${BASE_URL}/networks/${network}/pools`, {
      params: { page }
    });
  },

  // Private endpoints (require authentication)
  createToken: async (tokenData: any) => {
    return request.private.post(`${BASE_URL}/token`, tokenData);
  },

  getUserProfile: async () => {
    return request.private.get(`${BASE_URL}/user/profile`);
  },

  // ... other endpoints ...
};