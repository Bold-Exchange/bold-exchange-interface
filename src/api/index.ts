import request from "@/utils/request";
import type { OHLCVData, Pool, PoolResponse, Trade, Network } from "./api_types";
import type {
  PaginationParams,
  NetworkParams,
  TimeFrameType,
  OHLCVParams,
} from "./param_types";

const BASE_URL = `${process.env.UMI_APP_API_URL}/api`;

export const api = {
  // Public endpoints
  getNetworks: async ({page = 1}: PaginationParams = {}) => {
    return request.public.get<{data: Network[], links: {first: string, last: string, prev: string, next: string}}>(`${BASE_URL}/networks`, {
      params: { page },
    });
  },
  getDexes: async ({ network }: NetworkParams) => {
    const response = await request.public.get<{ data: Dex[] }>(
      `${BASE_URL}/networks/${network}/dexes`
    );

    return [
      {
        key: "all",
        label: "All DEXes",
      },
      ...response.data.data.map((dex) => ({
        key: dex.id,
        label: dex.attributes.name,
      })),
    ];
  },
  getTrendingPools: async (
    { network }: NetworkParams,
    { page = 1 }: PaginationParams = {},
    include?: string,
    duration?: TimeFrameType
  ) => {
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

  getOHLCV: async ({
    network,
    pool_address,
    timeframe,
    limit,
    before_timestamp,
  }: OHLCVParams & { limit?: string, before_timestamp?: string}) => {
    return request.public.get<OHLCVData>(
      `${BASE_URL}/networks/${network}/pools/${pool_address}/ohlcv/${timeframe}`,
      {
        params: { limit, before_timestamp },
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
