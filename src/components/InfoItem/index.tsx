import React, { ReactNode } from "react";

interface InfoItemProps {
  title: string;
  children: ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, children }) => {
  return (
    <p className="flex justify-between my-2 text-xs">
      <span className="text-gray-500">{title}</span>
      <span className="text-slate-300">{children}</span>
    </p>
  );
};

export default InfoItem;
