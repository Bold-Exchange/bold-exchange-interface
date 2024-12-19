// Common interfaces
interface TokenMetadata {
    address: string;
    name: string;
    symbol: string;
    coingecko_coin_id: string;
}

interface PriceChangePercentage {
    [key: string]: number; // e.g. "1h", "24h", "7d"
}

interface Transactions {
    [key: string]: number; // e.g. "1h", "24h", "7d"
}

interface VolumeUSD {
    [key: string]: string; // e.g. "1h", "24h", "7d"
}

// Pool related interfaces
interface PoolAttributes {
    name: string;
    address: string;
    base_token_price_usd: string;
    quote_token_price_usd: string;
    base_token_price_native_currency: string;
    quote_token_price_native_currency: string;
    base_token_price_quote_token: string;
    quote_token_price_base_token: string;
    pool_created_at: string;
    reserve_in_usd: string;
    fdv_usd: string;
    market_cap_usd: string;
    price_change_percentage: PriceChangePercentage;
    transactions: Transactions;
    volume_usd: VolumeUSD;
}

export interface PoolData {
    id: string;
    type: string;
    attributes: PoolAttributes;
    relationships: Relationship;
}

export interface Relationship {
    base_token: {
        data: {
            id: string;
            type: string;
        }
    };
    quote_token: {
        data: {
            id: string;
            type: string;
        }
    };
    dex: {
        data: {
            id: string;
            type: string;
        }
    };
}

export interface PoolsResponse {
    data: PoolData[];
}

// Token related interfaces
interface TokenAttributes {
    name: string;
    address: string;
    symbol: string;
    decimals: number;
    coingecko_coin_id: string;
    image_url: string;
    websites: string[];
    description: string;
    discord_url: string;
    telegram_handle: string;
    twitter_handle: string;
    gt_score: number;
    metadata_updated_at: string;
}

interface TokenData {
    id: string;
    type: string;
    attributes: TokenAttributes;
    relationships: Record<string, unknown>;
}

export interface TokenResponse {
    data: TokenData[];
}

// OHLCV related interfaces
interface OHLCVAttributes {
    ohlcv_list: [number, number, number, number, number, number][]; // [timestamp, open, high, low, close, volume]
}

interface OHLCVData {
    id: string;
    type: string;
    attributes: OHLCVAttributes;
}

export interface OHLCVResponse {
    data: OHLCVData;
    meta: {
        base: TokenMetadata;
        quote: TokenMetadata;
    };
}

// API Parameters interfaces
export interface PaginationParams {
    page?: number;
}

export interface NetworkParams {
    network: string;
}

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