import React, { ReactNode } from "react";
import styles from "./styles.less";

// 定义 ButtonProps 接口
interface ButtonProps {
  onClick: () => void;
  children: ReactNode; // 添加 children 属性
}

// 将 Button 函数组件类型化
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <div className={styles.trade_btn} onClick={onClick}>
      {children} {/* 渲染子元素 */}
    </div>
  );
};

export default Button;
