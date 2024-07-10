import React, { useState } from "react";
import { Drawer, Space, Table, Tag } from "antd";
import type { DrawerProps, RadioChangeEvent, TableProps } from "antd";
import { FunnelPlotOutlined, ShareAltOutlined } from "@ant-design/icons";
import d from "./d.png";

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
        bodyStyle={{ padding: 0 }}
      >
        <img src={d} width={"100%"} />
      </Drawer>
    </>
  );
};

export default App;
