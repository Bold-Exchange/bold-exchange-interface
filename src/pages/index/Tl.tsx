import React, { useState } from "react";
import { history } from "umi";
import { Button, Drawer, Rate, Space, Table, Tag } from "antd";
import type { DrawerProps, RadioChangeEvent, TableProps } from "antd";
import {
  BulbOutlined,
  FunnelPlotOutlined,
  RightCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import d from "./d.png";
import Charts from "../portfolio/Charts";
import T2 from "./T2";
import { CopyText, Block } from "@/components";
import Token from "./Token";

const Item = ({ children }: any) => {
  return <div className="flex flex-col">{children}</div>;
};
const Title = ({ children, color = "white" }: any) => {
  return <div className={`text-${color}-500 text-sm`}>{children}</div>;
};
const Span = ({ color = "gray", children }: any) => {
  return <div className={`flex text-${color}-500 text-[12]`}>{children}</div>;
};
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
    title: "Token",
    dataIndex: "img",
    key: "type",
    render: (_) => <Token img={_} />,
  },
  {
    title: "Created",
    dataIndex: "currency",
    key: "currency",
    render: () => (
      <Item>
        <Title color="green">30d</Title>
      </Item>
    ),
  },
  {
    title: "Liquidity",
    dataIndex: "rental",
    key: "rental",
    render: () => (
      <Item>
        <Title color="white">98,032.5🔥</Title>
      </Item>
    ),
  },
  {
    title: "FDV",
    dataIndex: "rental",
    key: "rental",
    render: () => (
      <Item>
        <Span>$635.7k</Span>
      </Item>
    ),
  },
  {
    title: "Holders",
    key: "quantity",
    dataIndex: "quantity",
    render: () => (
      <Item>
        <Title color="white">334</Title>
      </Item>
    ),
  },
  {
    title: "1h TXs",
    dataIndex: "price",
    key: "price",
    render: () => (
      <Item>
        <Title color="white">57,533</Title>

        <Span>
          <Span color="green">35,984</Span>/<Span color="red">20,164</Span>
        </Span>
      </Item>
    ),
  },
  {
    title: "1h VOl",
    dataIndex: "profit",
    key: "profit",
    render: () => (
      <Item>
        <Title color="white">334</Title>
      </Item>
    ),
  },
  {
    title: "Price",
    dataIndex: "duration",
    key: "duration",
    render: () => (
      <Item>
        <Title color="white">334</Title>
      </Item>
    ),
  },
  {
    title: "1m%",
    dataIndex: "duration",
    key: "duration",
    render: () => (
      <Item>
        <Title color="green">334</Title>
      </Item>
    ),
  },
  {
    title: "5m%",
    dataIndex: "duration",
    key: "duration",
    render: () => (
      <Item>
        <Title color="red">334</Title>
      </Item>
    ),
  },
  {
    title: "1h%",
    dataIndex: "duration",
    key: "duration",
    render: () => (
      <Item>
        <Title color="red">334</Title>
      </Item>
    ),
  },
  {
    title: "Degen Audit",
    dataIndex: "duration",
    key: "duration",
    render: () => (
      <div className="flex gap-1">
        <Item>
          <Span color="green">Yes</Span>
          <Span color="white">NoMint</Span>
        </Item>
        <Item>
          <Span color="green">Yes</Span>
          <Span color="white">Top10 hold</Span>
        </Item>
        <Item>
          <Span color="green">No</Span>
          <Span color="white">Blacklist</Span>
        </Item>
        <Item>
          <Span color="green">Yes</Span>
          <Span color="white">Burnt</Span>
        </Item>
      </div>
    ),
  },
  {
    title: "DEV",
    dataIndex: "duration",
    key: "duration",
    render: () => (
      <Item>
        <Title color="green">22.59%</Title>
        <Span color="white">NoMint</Span>
      </Item>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="text-white px-4 py-2 rounded-md hover:bg-[#7289db]">
          <BulbOutlined />
          &nbsp; Buy
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    type: 0,
    img: "/images/whbles.png",
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
              history.push("/trade");
            },
          };
        }}
      />
    </>
  );
};

export default App;
