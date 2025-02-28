export interface OHLCVData {
    data: {
        id: string;
        type: string;
        attributes: {
            ohlcv_list: number[][];
        };
    };
    meta: {
        base: OHLCVToken;
        quote: OHLCVToken;
    };
}

export interface OHLCVToken {
    name: string;
    symbol: string;
    address: string;
    coingecko_coin_id?: string;
}

// Base interface for relationships
export interface Relationship {
    data: {
        id: string;
        type: string;
    };
}

// Pool relationships without meta
export interface PoolRelationships {
    base_token: Relationship;
    quote_token: Relationship;
    dex: Relationship;
}

// Included token structure
export interface IncludedToken {
    id: string;
    type: 'token';
    attributes: {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        image_url?: string;
        coingecko_coin_id?: string;
    };
}

// Update Pool interface to handle included resources
export interface PoolResponse<T extends Pool | Pool[]> {
    data: T;
    included?: IncludedToken[];
}

export interface PriceChangePercentage {
    m5?: string;
    h1?: string;
    h6?: string;
    h24?: string;
  }
  
  export interface TransactionMetrics {
    buys: number;
    sells: number;
    buyers: number;
    sellers: number;
  }
  
  export interface TransactionsByTimeframe {
    m5?: TransactionMetrics;
    m15?: TransactionMetrics;
    m30?: TransactionMetrics;
    h1?: TransactionMetrics;
    h24?: TransactionMetrics;
  }
  
  export interface VolumeUSD {
    m5?: string;
    h1?: string;
    h6?: string;
    h24?: string;
  }
  
  // Update the Pool interface attributes
  export interface Pool {
    id: string;
    type: string;
    attributes: {
      name: string;
      address: string;
      base_token_price_usd?: string;
      quote_token_price_usd?: string;
      base_token_price_native_currency?: string;
      quote_token_price_native_currency?: string;
      base_token_price_quote_token?: string;
      quote_token_price_base_token?: string;
      pool_created_at?: string;
      reserve_in_usd?: string;
      fdv_usd?: string;
      market_cap_usd?: string;
      price_change_percentage: PriceChangePercentage;
      transactions: TransactionsByTimeframe;
      volume_usd: VolumeUSD;
    };
    relationships: PoolRelationships;
  }

export interface TokenRelationship {
    data: {
        id: string;
        type: string;
    };
    meta?: {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        coingecko_coin_id?: string;
        image_url?: string;
        websites: string[];
        description?: string;
        discord_url?: string;
        telegram_handle?: string;
        twitter_handle?: string;
        categories?: string[];
        gt_category_ids?: string[];
        gt_score?: number;
        metadata_updated_at?: string;
    };
}

export interface DexRelationship {
    data: {
        id: string;
        type: string;
    };
}

// Define the structure for a token
export interface Token {
    id: string;
    type: string;
    attributes: {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        total_supply?: string;
        coingecko_coin_id?: string;
        price_usd?: string;
        fdv_usd?: string;
        total_reserve_in_usd?: string;
        volume_usd?: object;
        market_cap_usd?: string;
    };
    relationships: any; // Define more specific types if needed
}

// Define the structure for token info
export interface TokenInfo {
    id: string;
    type: string;
    attributes: {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        coingecko_coin_id?: string;
        image_url?: string;
        websites: string[];
        description?: string;
        discord_url?: string;
        telegram_handle?: string;
        twitter_handle?: string;
        categories?: string[];
        gt_category_ids?: string[];
        gt_score?: number;
        metadata_updated_at?: string;
    };
    relationships: any; // Define more specific types if needed
}

// Define the structure for a trade
export interface Trade {
    id: string;
    type: string;
    attributes: {
        block_number: number;
        block_timestamp: string;
        tx_hash: string;
        tx_from_address: string;
        from_token_amount: string;
        to_token_amount: string;
        price_from_in_currency_token: string;
        price_to_in_currency_token: string;
        price_from_in_usd: string;
        price_to_in_usd: string;
        kind: string;
        volume_in_usd: string;
        from_token_address: string;
        to_token_address: string;
    };
}

// Add these new interfaces for error handling
export interface GeckoError {
    status: string;
    title: string;
}

export interface GeckoErrorResponse {
    errors: GeckoError[];
}


export type Network = 'eth' | 'solana' | 'base' | 'bsc' | 'ton' | 'arbitrum' | 'linea'
