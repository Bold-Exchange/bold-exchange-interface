import React from "react";
import "./styles.less";
interface TagProps {
  type: "red" | "blue" | "green" | "purple";
  text: React.ReactNode; // 定义 children 属性
}

function Tag(props: TagProps) {
  const { type, text } = props;
  return (
    <div className="club_name">
      <span className={type}>{text}</span>
    </div>
  );
}

export default Tag;
