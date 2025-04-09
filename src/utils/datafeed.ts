import { api } from "@/api";

const configuration = {
  supported_resolutions: ["1", "5", "15", "1H", "4H", "12H", "1D"],
  symbols_types: [
    {
      name: "crypto",
      value: "crypto",
    },
  ],
};

const parseSymbol = (symbol: string) => {
  const [name, network, poolAddress] = symbol.split("-");
  return {
    name,
    network,
    poolAddress,
  };
};

const lastBarsCache = new Map();

export default {
  onReady: (callback) => {
    setTimeout(() => callback(configuration), 0);
  },
  searchSymbols: async (
    userInput: string,
    exchange: string,
    symbolType: string,
    onResultReadyCallback: (result: any) => void
  ) => {
    onResultReadyCallback([]);
  },
  resolveSymbol: async (
    symbolName: string,
    onSymbolResolvedCallback,
    onResolveErrorCallback,
    extension
  ) => {
    console.log(symbolName);
    const { name } = parseSymbol(symbolName);
    console.log(symbolName, name);

    onSymbolResolvedCallback({
      ticker: name,
      name: symbolName,
      supported_resolutions: configuration.supported_resolutions,
    });
  },
  getBars: async (
    symbolInfo,
    resolution,
    periodParams,
    onHistoryCallback,
    onErrorCallback
  ) => {
    const { from, to, firstDataRequest, countBack } = periodParams;
    console.log(periodParams, resolution);

    if (firstDataRequest) {
      //lastBarsCache.set(symbolInfo.name);
    }
    let bars = [];

    const { network, poolAddress } = parseSymbol(symbolInfo.name);

    try {

        const data = await api.getOHLCV({
          network,
          pool_address: poolAddress,
          timeframe: "day",
          limit: countBack,
          before_timestamp: to,
        });
        //console.log('Raw API response:', JSON.stringify(data, null, 2));
        bars = [...bars, ...data.data.attributes.ohlcv_list.map((item) => ({
            time: item[0], // convert seconds to milliseconds
            open: item[1], // open prices
            high: item[2], // high prices
            low: item[3], // low prices
            close: item[4], // close prices
            volume: item[5], // volumes
          })).reverse()]
    
        console.log(bars);
    
        onHistoryCallback(bars, { noData: false });
    } catch (error) {
        console.error(error);
        //onHistoryCallback([], { noData: true });
        onErrorCallback(error);
    }
  },
  subscribeBars: (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscriberUID,
    onResetCacheNeededCallback
  ) => {},
  unsubscribeBars: (subscriberUID) => {},
};
