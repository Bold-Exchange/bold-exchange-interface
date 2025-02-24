import React, { useState } from "react";
import { history } from "umi";
import { Space, Table } from "antd";
import type { DrawerProps, RadioChangeEvent, TableProps } from "antd";
import {
  BulbOutlined,
} from "@ant-design/icons";
import { Pool } from "@/api/api_types";
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

interface TlProps {
  pools: Pool[];
  network: string;
  tokenImages: Record<string, string>;
}

const Tl: React.FC<TlProps> = ({ pools, network, tokenImages }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  
  const columns: TableProps<Pool>["columns"] = [  
    {
      title: "Token",
      dataIndex: "attributes",
      key: "type",
      render: (attributes, record) => (
        <Token 
          address={attributes.address} 
          name={attributes.name}
          imageUrl={record.relationships.base_token ? tokenImages[record.relationships.base_token.data.id] : undefined}
        />
      ),
    },
    {
      title: "Created",
      dataIndex: ["attributes", "pool_created_at"],
      key: "created",
      render: (created) => {
        const daysAgo = Math.floor((Date.now() - new Date(created).getTime()) / (1000 * 60 * 60 * 24));
        return (
          <Item>
            <Title color="green">{daysAgo}d ago</Title>
          </Item>
        );
      },
    },
    {
      title: "Liquidity",
      dataIndex: ["attributes", "reserve_in_usd"],
      key: "liquidity",
      render: (liquidity) => (
        <Item>
          <Title color="white">{`$ ${Number(liquidity).toLocaleString()}🔥`}</Title>
        </Item>
      ),
    },
    {
      title: "FDV",
      dataIndex: ["attributes", "fdv_usd"],
      key: "fdv",
      render: (fdv) => (
        <Item>
          <Span>{`$${Number(fdv).toLocaleString()}`}</Span>
        </Item>
      ),
    },
    {
      title: "1h TXs",
      dataIndex: ["attributes", "transactions", "h1"],
      key: "1h_txs",
      render: (h1) => (
        <Item>
          <Title color="white">{h1.buys + h1.sells}</Title>
          <Span>
            <Span color="green">{h1.buys}</Span>/<Span color="red">{h1.sells}</Span>
          </Span>
        </Item>
      ),
    },
    {
      title: "1h VOl",
      dataIndex: ["attributes", "volume_usd", "h1"],
      key: "1h_vol",
      render: (h1) => (
        <Item>
          <Title color="white">${Number(h1).toLocaleString()}</Title>
        </Item>
      ),
    },
    {
      title: "Price",
      dataIndex: ["attributes", "base_token_price_usd"],
      key: "price",
      render: (price) => (
        <Item>
          <Title color="white">${Number(price).toLocaleString()}</Title>
        </Item>
      ),
    },
    {
      title: "1H%",
      dataIndex: ["attributes", "price_change_percentage", "h1"],
      key: "price_change_percentage_h1",
      render: (h1) => (
        <Item>
          <Title color={Number(h1) > 0 ? "green" : "red"}>{h1}%</Title>
        </Item>
      ),
    },
    {
      title: "6H%",
      dataIndex: ["attributes", "price_change_percentage", "h6"],
      key: "price_change_percentage_h6",
      render: (h6) => (
        <Item>
          <Title color={Number(h6) > 0 ? "green" : "red"}>{h6}%</Title>
        </Item>
      ),
    },
    {
      title: "24H%",
      dataIndex: ["attributes", "price_change_percentage", "h24"],
      key: "price_change_percentage_h24",
      render: (h24) => (
        <Item>
          <Title color={Number(h24) > 0 ? "green" : "red"}>{h24}%</Title>
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
        dataSource={pools || []}
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            history.push(`/trade/${network}/${record.attributes.address}`);
          },
        })}
      />
    </>
  );
};

export default Tl;
