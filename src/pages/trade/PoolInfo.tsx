import React, { ReactNode } from "react";
import { InfoItem } from "@/components";
interface Props {
  title: ReactNode;
  data: {
    title: string;
    value: ReactNode;
  }[];
  more?: ReactNode;
}

// Pool Info面板
const PoolInfo: React.FC<Props> = ({ title, data, more }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-3">
      <p className="flex justify-between text-sm">
        <span className="text-white">{title}</span>
        {more && <span className="text-white">{more}</span>}
      </p>
      {data.map((item, index) => (
        <InfoItem title={item.title} key={index}>
          {item.value}
        </InfoItem>
      ))}
    </div>
  );
};
export default PoolInfo;
