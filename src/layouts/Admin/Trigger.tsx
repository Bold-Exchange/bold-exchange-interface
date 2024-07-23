import React from "react";
import { VerticalLeftOutlined, VerticalRightOutlined } from "@ant-design/icons";

interface TriggerProps {
  direction: "left" | "right"; // 方向
  isOpen: boolean; // 开合状态
  onToggle: () => void; // 回调函数
}

const Trigger: React.FC<TriggerProps> = ({ direction, isOpen, onToggle }) => {
  const getIcon = () => {
    if (direction === "left") {
      return isOpen ? <VerticalRightOutlined /> : <VerticalLeftOutlined />;
    } else {
      return isOpen ? <VerticalLeftOutlined /> : <VerticalRightOutlined />;
    }
  };

  return (
    <span
      className={`ant-layout-sider-zero-width-trigger ant-layout-sider-zero-width-trigger-${direction}`}
      onClick={onToggle}
      style={{ top: "25px" }}
    >
      {getIcon()}
    </span>
  );
};

export default Trigger;
