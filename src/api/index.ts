import request from "@/utils/request";
import type { Pool, PoolResponse } from "./api_types";
import type { PaginationParams, NetworkParams, TimeFrameType } from "./param_types";

const BASE_URL = "http://localhost:8080/api";

export const api = {
  // Public endpoints
  getTrendingPools: async (
    { network }: NetworkParams,
    { page = 1 }: PaginationParams = {},
    include?: string,
    duration?: TimeFrameType
  ) => {
    return request.public.get<PoolResponse>(
      `${BASE_URL}/networks/${network}/trending_pools`,
      {
        params: { page, include, duration },
      }
    );
  },

  getPools: async (
    { network }: NetworkParams,
    { page = 1 }: PaginationParams = {}
  ) => {
    return request.public.get<Pool[]>(`${BASE_URL}/networks/${network}/pools`, {
      params: { page },
    });
  },

  getPool: async ({
    network,
    address,
  }: NetworkParams & { address: string }) => {
    return request.public.get<Pool>(
      `${BASE_URL}/networks/${network}/pools/${address}/info`
    );
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
