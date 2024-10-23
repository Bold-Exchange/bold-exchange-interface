import React, { useState } from "react";
import { Button, Drawer, Rate, Space, Table, Tag } from "antd";
import type { DrawerProps, RadioChangeEvent, TableProps } from "antd";
import {
  FunnelPlotOutlined,
  RightCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import d from "./d.png";
import Charts from "../portfolio/Charts";
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
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (_) =>
      _ === 0 ? (
        <Tag className="px-2" bordered={false} color="success">
          Sell
        </Tag>
      ) : (
        <Tag className="px-2" bordered={false} color="error">
          Buy
        </Tag>
      ),
  },
  {
    title: "Total USD",
    dataIndex: "currency",
    key: "currency",
    render: (a, _) => (
      <span
        className={`${(_.type == 0 && "text-green-500") || "text-red-500"}`}
      >
        {a}
      </span>
    ),
  },
  {
    title: "Amount",
    dataIndex: "rental",
    key: "rental",
    render: (a, _) => (
      <span
        className={`${(_.type == 0 && "text-green-500") || "text-red-500"}`}
      >
        {a}
      </span>
    ),
  },
  {
    title: "Price",
    key: "quantity",
    dataIndex: "quantity",
    render: (a, _) => (
      <span
        className={`${(_.type == 0 && "text-green-500") || "text-red-500"}`}
      >
        {a}
      </span>
    ),
  },
  {
    title: "Time",
    dataIndex: "price",
    key: "price",
  },

  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM6.465 5.501a.386.386 0 00-.266.11L4.39 7.42a.188.188 0 00.133.32h9.164c.101 0 .197-.04.266-.109l1.81-1.81a.188.188 0 00-.133-.32H6.465zm0 6.758a.376.376 0 00-.266.11l-1.81 1.81a.188.188 0 00.133.32h9.164c.101 0 .197-.04.266-.11l1.81-1.81a.188.188 0 00-.133-.32H6.465zm7.487-3.289a.376.376 0 00-.266-.11H4.522a.188.188 0 00-.133.321l1.81 1.81c.07.07.165.11.266.11h9.164a.188.188 0 00.133-.32l-1.81-1.81z"
            ></path>
          </svg>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    type: 1,
    currency: "$1.99",
    rental: 9.92,
    quantity: "3.2M",
    price: "1d",
    profit: "--",
    duration: "--",
  },
  {
    key: "2",
    type: 0,
    currency: "$2.99",
    rental: 1.91,
    quantity: "12.8M",
    price: "2d",
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
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default App;
