import React, { ReactNode } from "react";
import { InfoItem } from "@/components";
import { Button, Input, Radio, Switch } from "antd";
interface Props {
  title: ReactNode;
  data: {
    title: string;
    value: ReactNode;
  }[];
  more?: ReactNode;
}

// Pool Info面板
const PoolInfo: React.FC<Props> = () => {
  return (
    <div className="bg-zinc-900 rounded-sm p-2">
      <p className="text-left text-gray-500">Linked wallet</p>
      <div className="flex justify-between items-center bg-black rounded-sm my-2">
        <div className="flex-auto text-center text-green-500 bg-gray-600 p-2 rounded-sm">
          Buy
        </div>
        <div className="flex-auto text-center p-2 rounded-sm">Sell</div>
      </div>
      <Input className="p-2" suffix={"SOL"} defaultValue={0} />
      <InfoItem title={"≈$0(0SOL)"} key={0}>
        Bal:--STASHY
      </InfoItem>
      <div className="flex justify-between items-center gap-2 text-center">
        <div className="flex-auto border border-gray-600 rounded-sm p-1">
          5%
        </div>
        <div className="flex-auto border border-gray-600 rounded-sm p-1">
          15%
        </div>
        <div className="flex-auto border border-gray-600 rounded-sm p-1">
          25%
        </div>
        <div className="flex-auto border border-gray-600 rounded-sm p-1">
          50%
        </div>
        <div className="flex-auto border border-gray-600 rounded-sm p-1">
          100%
        </div>
      </div>
      <Button
        size="large"
        type="default"
        className="w-full mt-2 bg-white text-black"
      >
        Connect wallet
      </Button>
      <InfoItem title={"Advanced Settings"} key={0}>
        -
      </InfoItem>
      <InfoItem title={"Boost mode(Anti-MEV)"} key={1}>
        <Switch defaultChecked />
      </InfoItem>

      <InfoItem title={"Slippage"} key={2}>
        <a>Auto( 3.5% )</a>
      </InfoItem>

      <InfoItem title={"Deadline"} key={3}>
        <a> 0.012</a>
      </InfoItem>
    </div>
  );
};
export default PoolInfo;
