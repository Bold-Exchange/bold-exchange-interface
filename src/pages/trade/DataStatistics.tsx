import React from "react";
import { InfoItem, Block } from "@/components";
import { CheckOutlined, SunOutlined } from "@ant-design/icons";
// 测试数据
const data = [
  { title: "Total liq", value: "$5,770.94(20.54 SOL)" },
  { title: "Market cap", value: "$3,09" },
];

const DataStatistics = () => {
  return (
    <div className=" bg-zinc-900 flex-row divide-y divide-gray-800">
      <div className="flex divide-x divide-gray-800 ">
        <Block hover title={"1m"}>
          0%
        </Block>
        <Block hover title={"5m"}>
          0%
        </Block>
        <Block hover title={"1h"}>
          0%
        </Block>
        <Block hover title={"24h"}>
          0%
        </Block>
      </div>
      <div className="flex">
        <Block textAlign="text-left" title={"Vol"}>
          <span className="text-white">$0.00</span>
        </Block>
        <Block title={"Buys"}>
          <span className="text-green-500">0</span>
        </Block>
        <Block title={"Sells"}>
          <span className="text-red-500">0</span>
        </Block>
        <Block textAlign="text-right" title={"Net Buy"}>
          <span className="text-white">$0.00</span>
        </Block>
      </div>
      <div className="flex">
        <Block textAlign="text-left" title={"FDV"}>
          <span className="text-white"> $3,3362.12</span>
        </Block>
        <Block title={"MKT Cap"}>
          <span className="text-white"> $3,3362.12</span>
        </Block>
        <Block title={"24 Vol"}>
          <span className="text-white"> $42.97</span>
        </Block>
        <Block textAlign="text-right" title={"Holders"}>
          <span className="text-white"> 236</span>
        </Block>
      </div>
      <div className="flex">
        <Block textAlign="text-left" title={"Pair"}>
          <p className="text-white"> STASHY</p>
          <p className="text-white">SOL</p>
        </Block>
        <Block title={"Liq/Initial"}>
          <p className="text-white"> 866.6M/206.9M(22.23%)</p>
          <p className="text-white">
            {" "}
            <span className="text-red-500">20.54</span>/79.01{" "}
            <span className="text-red-500">(-74.01%)</span>
          </p>
        </Block>
        <Block textAlign="text-right" title={"Value"}>
          <span className="text-white"> $42456.97</span>
          <span className="text-white"> $4222.97</span>
        </Block>
      </div>
      <div className="flex-col flex-row">
        <div className="flex">
          <Block textAlign="text-left" title={"NoMint"}>
            <span className="text-green-500">
              Yes&nbsp; <CheckOutlined />
            </span>
          </Block>
          <Block title={"Top10 hold"}>
            <span className="text-green-500">
              8.09%&nbsp; <CheckOutlined />
            </span>
          </Block>
          <Block title={"Blacklist"}>
            <span className="text-green-500">
              No&nbsp; <CheckOutlined />
            </span>
          </Block>
          <Block textAlign="text-right" title={"Holders"}>
            <span className="text-green-500">
              100%&nbsp; <SunOutlined className="text-rose-300" />
            </span>
          </Block>
        </div>
        <InfoItem title="Insiders">--</InfoItem>
        <InfoItem title="Rug probability">--</InfoItem>
      </div>
    </div>
  );
};
export default DataStatistics;
