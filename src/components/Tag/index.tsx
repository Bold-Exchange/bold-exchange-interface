import React from "react";

interface TagProps {
  type: string;
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
