import React, { useState } from "react";
import { Button, Drawer, Rate, Space, Table, Tag } from "antd";
import type { DrawerProps, RadioChangeEvent, TableProps } from "antd";
import {
  FunnelPlotOutlined,
  RightCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import d from "./d.png";
import Charts from "./Charts";
import T2 from "./T2";
import { CopyText, Block } from "@/components";
interface DataType {
  key: string;
  type: number;
  currency: string;
  rental: number;
  quantity: number | string;
  price: number | string;
  profit: string;
  duration: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    render: (_) =>
      _ === 0 ? (
        <Tag bordered={false} color="success">
          买入
        </Tag>
      ) : (
        <Tag bordered={false} color="error">
          卖出
        </Tag>
      ),
  },
  {
    title: "币种",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "总额SOL",
    dataIndex: "rental",
    key: "rental",
  },
  {
    title: "数量",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "利润",
    dataIndex: "profit",
    key: "profit",
  },
  {
    title: "时长",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <ShareAltOutlined />
        </a>
        <a>
          <FunnelPlotOutlined />
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    type: 0,
    currency: "RIZZ",
    rental: 9.92,
    quantity: "3.2M",
    price: "$0.00047",
    profit: "--",
    duration: "--",
  },
  {
    key: "2",
    type: 0,
    currency: "Motion",
    rental: 1.91,
    quantity: "12.8M",
    price: "$0.0₄21978",
    profit: "--",
    duration: "--",
  },
  {
    key: "3",
    type: 0,
    currency: "Motion",
    rental: 1.91,
    quantity: "18.2M",
    price: "$0.0₄16011",
    profit: "--",
    duration: "--",
  },
  {
    key: "1",
    type: 1,
    currency: "RIZZ",
    rental: 9.92,
    quantity: "3.2M",
    price: "$0.00047",
    profit: "--",
    duration: "--",
  },
  {
    key: "2",
    type: 0,
    currency: "Motion",
    rental: 1.91,
    quantity: "12.8M",
    price: "$0.0₄21978",
    profit: "--",
    duration: "--",
  },
  {
    key: "3",
    type: 1,
    currency: "Motion",
    rental: 1.91,
    quantity: "18.2M",
    price: "$0.0₄16011",
    profit: "--",
    duration: "--",
  },
  {
    key: "1",
    type: 0,
    currency: "RIZZ",
    rental: 9.92,
    quantity: "3.2M",
    price: "$0.00047",
    profit: "--",
    duration: "--",
  },
  {
    key: "2",
    type: 0,
    currency: "Motion",
    rental: 1.91,
    quantity: "12.8M",
    price: "$0.0₄21978",
    profit: "--",
    duration: "--",
  },
  {
    key: "3",
    type: 0,
    currency: "Motion",
    rental: 1.91,
    quantity: "18.2M",
    price: "$0.0₄16011",
    profit: "--",
    duration: "--",
  },
  {
    key: "1",
    type: 1,
    currency: "RIZZ",
    rental: 9.92,
    quantity: "3.2M",
    price: "$0.00047",
    profit: "--",
    duration: "--",
  },
  {
    key: "2",
    type: 0,
    currency: "Motion",
    rental: 1.91,
    quantity: "12.8M",
    price: "$0.0₄21978",
    profit: "--",
    duration: "--",
  },
  {
    key: "3",
    type: 1,
    currency: "Motion",
    rental: 1.91,
    quantity: "18.2M",
    price: "$0.0₄16011",
    profit: "--",
    duration: "--",
  },
];

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record) => {
          return {
            onClick: (event) => {
              showDrawer();
            },
          };
        }}
      />
      <Drawer
        title={null}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={700}
        bodyStyle={{ padding: 0, background: "rgb(24, 24, 24)" }}
      >
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Rate count={1} />
            <img
              width={36}
              className="rounded-full"
              src="https://cf-ipfs.com/ipfs/Qma4qS3zGMr92sWv61wQpKysawYSbYTUN5pfDar2TpFkYt"
            />
            <div>
              <p>STASHY</p>
              <p className="text-gray-400">MCP 3rr</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mx-2">
            <div className="flex gap-2">
              <div className="bg-gray-700 rounded-lg p-1">4h</div>
              <div className="opacity-25 bg-gray-800 rounded-lg p-1">1d</div>
              <div className="opacity-25 bg-gray-800 rounded-lg p-1">30d</div>
            </div>
            <div>
              <RightCircleOutlined />
            </div>
          </div>
        </div>
        <Charts />
        <div>
          <div className="flex gap-2 mt-4">
            <img width={16} src={"https://gmgn.ai/static/avator_new/42.png"} />
            <CopyText text={"6oZWfqvU76YvXA7X5QQGowTbxEVTFEU3BqQ46DxBudKY"} />
          </div>
          <div className="grid grid-cols-2 mt-4">
            <Block textAlign="text-left" title="Total Profit:">
              <span className="text-red-500">-$43.54(-97.97%)</span>
            </Block>
            <Block textAlign="text-left" title="Unrealize">
              <span className="text-red-500 bg-red-100 rounded-lg p-1">
                Sell All
              </span>
            </Block>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <Block textAlign="text-left" title="Balance">
              $0
            </Block>
            <Block textAlign="text-left" title="Position%(0 of 261.9K)">
              --
            </Block>
          </div>
          <div className="grid grid-cols-2	 mt-4">
            <Block textAlign="text-left" title="Bought">
              $44.9
            </Block>
            <Block textAlign="text-left" title="Sold">
              $0.902
            </Block>
          </div>
          <div className="grid grid-cols-2	 mt-4">
            <Block
              textAlign="text-left"
              title="Avg Cost/Sold
"
            >
              $0.00017/$0.0₅34786
            </Block>
            <Block textAlign="text-left" title="TXs">
              <span className="text-green-500">1</span>/
              <span className="text-red-500">1</span>
            </Block>
          </div>
        </div>
        <Button block>Portfolio</Button>
        <T2 />
      </Drawer>
    </>
  );
};

export default App;
