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
import T2 from "./T2";
import { CopyText, Block } from "@/components";
import { Trade } from "@/api/api_types";

const App: React.FC<{ data: Trade[] }> = ({ data: trades }) => {
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

  const columns: TableProps<Trade>["columns"] = [
    {
      title: "Date",
      dataIndex: ["attributes", "block_timestamp"],
      key: "date",
      render: (date) => {
        const daysAgo = Math.floor(
          (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
        );
        return <p>{daysAgo}d ago</p>;
      },
    },
    {
      title: "Type",
      dataIndex: ["attributes", "kind"],
      key: "type",
      render: (kind) =>
        kind === "buy" ? (
          <Tag bordered={false} color="success">
            Buy
          </Tag>
        ) : (
          <Tag bordered={false} color="error">
            Sell
          </Tag>
        ),
    },
    {
      title: "USD",
      dataIndex: ["attributes"],
      key: "usd",
      render: (attributes) => {
        return <p>{attributes.volume_in_usd}</p>;
      },
    },
    {
      title: "Token",
      dataIndex: ["attributes"],
      key: "token",
      render: (attributes) => {
        return (
          <p>
            {attributes.kind === "buy"
              ? attributes.to_token_amount
              : attributes.from_token_amount}
          </p>
        );
      },
    },
    {
      title: "Amount Currency Token",
      dataIndex: ["attributes"],
      key: "quantity",
      render: (attributes) => {
        return (
          <p>
            {attributes.kind === "buy"
              ? attributes.from_token_amount
              : attributes.to_token_amount}
          </p>
        );
      },
    },
    {
      title: "Price Currency Token",
      dataIndex: ["attributes"],
      key: "price",
      render: (attributes) => {
        return (
          <p>
            {attributes.kind === "buy"
              ? attributes.price_to_in_currency_token
              : attributes.price_from_in_currency_token}{" "}
            /{" "}
            {attributes.kind === "buy"
              ? attributes.price_to_in_usd
              : attributes.price_from_in_usd}
          </p>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <ShareAltOutlined
              onClick={() => {
                navigator.clipboard.writeText(record.attributes.tx_hash);
              }}
            />
          </a>
          <a>
            <FunnelPlotOutlined />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        rowKey={(trade) => trade.id}
        dataSource={trades}
        pagination={false}
        onRow={() => {
          return {
            onClick: () => {
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
        <div className="p-3">
          <div>
            <div className="flex gap-2 mt-4">
              <img
                width={16}
                className="rounded-full"
                src={"https://gmgn.ai/static/avator_new/42.png"}
              />
              <CopyText text={"6oZWfqvU76YvXA7X5QQGowTbxEVTFEU3BqQ46DxBudKY"} />
            </div>
            <div className="grid grid-cols-2">
              <Block textAlign="text-left" title="Total Profit:">
                <span className="text-red-500 text-sm">-$43.54(-97.97%)</span>
              </Block>
              <Block textAlign="text-left" title="Unrealize">
                <span
                  className="text-red-500 rounded-sm p-1"
                  style={{ background: "rgba(240, 72, 102, 0.2)" }}
                >
                  Sell All
                </span>
              </Block>
            </div>
            <div className="grid grid-cols-2">
              <Block textAlign="text-left" title="Balance">
                <span className="text-white text-sm"> $0</span>
              </Block>
              <Block textAlign="text-left" title="Position%(0 of 261.9K)">
                <span className="text-white text-sm">--</span>
              </Block>
            </div>
            <div className="grid grid-cols-2">
              <Block textAlign="text-left" title="Bought">
                <span className="text-white text-sm"> $44.9</span>
              </Block>
              <Block textAlign="text-left" title="Sold">
                <span className="text-white text-sm">$0.902</span>
              </Block>
            </div>
            <div className="grid grid-cols-2">
              <Block
                textAlign="text-left"
                title="Avg Cost/Sold
"
              >
                <span className="text-white text-sm">$0.00017/$0.0₅34786</span>
              </Block>
              <Block textAlign="text-left" title="TXs">
                <span className="text-green-500">1</span>/
                <span className="text-red-500">1</span>
              </Block>
            </div>
          </div>
          <Button className="p-5 text-sm my-3" block>
            Portfolio
          </Button>
          <T2 />
        </div>
      </Drawer>
    </>
  );
};

export default App;
