import React, { useState } from "react";

const PercentageSelector = ({onChange,percentages=["5%", "15%", "25%", "50%", "100%"]}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 列表项以及其显示值
  // const percentages = ["5%", "15%", "25%", "50%", "100%"];

  return (
    <div className="flex justify-between items-center text-center w-full">
      {percentages.map((percentage, index) => (
        <div
          key={index}
          className={`flex-auto  rounded-sm p-1 cursor-pointer flex-auto ${
            selectedIndex === index ? "bg-zinc-800" : ""
          }`}
          onClick={() =>{ setSelectedIndex(index);
            onChange&&onChange(index)
          }}
        >
          {percentage}
        </div>
      ))}
    </div>
  );
};

export default PercentageSelector;
