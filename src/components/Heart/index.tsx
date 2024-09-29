import React, { useState } from "react";
import { ReactComponent as IconHeart } from "./heart-follow.svg";
const Heart = () => {
  const [choose, setChoose] = useState(false);
  return (
    <IconHeart
      onClick={(e) => {
        e.stopPropagation();
        setChoose(true);
      }}
      style={{ width: "14px", fill: !choose && "#fff"||'#5865f2' }}
    />
  );
};
export default Heart;
