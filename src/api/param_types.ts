export interface DexParams extends NetworkParams {
    dex: string;
}

export interface PoolParams extends NetworkParams {
    pool_address: string;
}

export interface TokenParams extends NetworkParams {
    token_address: string;
}

export interface OHLCVParams extends PoolParams {
    timeframe: 'day' | 'hour' | 'minutes';
}

// API Parameters interfaces
export interface PaginationParams {
    page?: number;
}

export interface NetworkParams {
    network: string;
}

export type TimeFrameType = '5m' | '1h' | '6h' | '24h'