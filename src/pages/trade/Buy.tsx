import React, { ReactNode, useState } from "react";
import { InfoItem, PercentangeSelector } from "@/components";
import { Button, Input, Radio, Switch } from "antd";
import { ShoppingCartOutlined, TagsOutlined } from "@ant-design/icons";
interface Props {
  title?: ReactNode;
  data?: {
    title: string;
    value: ReactNode;
  }[];
  more?: ReactNode;
}

// Pool Info面板
const PoolInfo: React.FC<Props> = () => {
  const [buy, setBuy] = useState(true);
  return (
    <div className="bg-zinc-900 rounded-lg p-3">
      <div className="flex justify-between items-center bg-black rounded-sm my-2 p-1">
        <div
          className={`flex-auto text-center p-2 rounded-sm ${
            buy && "bg-green-500 bg-gray-700"
          }`}
          onClick={() => setBuy(true)}
        >
          <ShoppingCartOutlined /> Buy
        </div>
        <div
          className={`flex-auto text-center p-2 rounded-sm ${
            !buy && "bg-red-500 bg-gray-700"
          }`}
          onClick={() => setBuy(false)}
        >
          <TagsOutlined />
          Sell
        </div>
      </div>
      <Input className="p-2" suffix={"SOL"} defaultValue={0} />
      <InfoItem title={"≈$0(0SOL)"} key={0}>
        Bal:--STASHY
      </InfoItem>
      <PercentangeSelector />
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
