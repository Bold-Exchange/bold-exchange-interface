import request from "@/utils/request";
import type { Pool, PoolResponse, Trade } from "./api_types";
import type {
  PaginationParams,
  NetworkParams,
  TimeFrameType,
} from "./param_types";

const BASE_URL = `${process.env.UMI_APP_API_URL}/api`;

export const api = {
  // Public endpoints
  getTrendingPools: async (
    { network }: NetworkParams,
    { page = 1 }: PaginationParams = {},
    include?: string,
    duration?: TimeFrameType
  ): Promise<PoolResponse<Pool[]>> => {
    return request.public.get<PoolResponse<Pool[]>>(
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
    return request.public.get<PoolResponse<Pool[]>>(
      `${BASE_URL}/networks/${network}/pools`,
      {
        params: { page },
      }
    );
  },

  getPool: async ({
    network,
    address,
    include,
  }: NetworkParams & { address: string; include?: string }) => {
    return request.public.get<PoolResponse<Pool>>(
      `${BASE_URL}/networks/${network}/pools/${address}`,
      {
        params: { include },
      }
    );
  },

  getPoolTrades: async ({
    network,
    address,
    trade_volume_in_usd_greater_than,
    token,
  }: NetworkParams & {
    address: string;
    trade_volume_in_usd_greater_than?: number;
    token?: string;
  }) => {
    return request.public.get<{ data: Trade[] }>(
      `${BASE_URL}/networks/${network}/pools/${address}/trades`,
      {
        params: {
          trade_volume_in_usd_greater_than,
          token,
        },
      }
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
