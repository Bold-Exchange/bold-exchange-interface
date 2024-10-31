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
import Token2 from "./Token2";

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
    title: "Wallet/SOL Bal",
    dataIndex: "type",
    key: "type",
    render: (_) => <Token />,
  },
  {
    title: "Unrealized Profit",
    dataIndex: "type",
    key: "type",
    render: (_) => <span>80,593,485</span>,
  },

  {
    title: "Realized Profit(PnL)",
    dataIndex: "rental",
    key: "rental",
    render: () => (
      <Item>
        <Title color="green">+5920.38%</Title>

        <Span color="green">$635.7k</Span>
      </Item>
    ),
  },
  {
    title: "Avg Cost",
    dataIndex: "rental",
    key: "rental",
    render: () => (
      <Item>
        <Title color="green">+120.38%</Title>

        <Span color="green">$65.7k</Span>
      </Item>
    ),
  },
  {
    title: "Total Trades",
    dataIndex: "rental",
    key: "rental",
    render: () => (
      <Item>
        <Title color="green">+120.38%</Title>

        <Span color="green">$65.7k</Span>
      </Item>
    ),
  },
  {
    title: "Wallet/SOL Bal",
    dataIndex: "type",
    key: "type",
    render: (_) => <Token2 />,
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
              history.push("/portfolio");
            },
          };
        }}
      />
    </>
  );
};

export default App;
