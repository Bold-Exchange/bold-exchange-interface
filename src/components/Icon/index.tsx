import React from "react";
import classNames from "classnames";
import { ReactComponent as XIcon } from "./assets/x.svg";
import { ReactComponent as TGIcon } from "./assets/tg.svg";
import { ReactComponent as WebIcon } from "./assets/website.svg";
import { ReactComponent as SolIcon } from "./assets/sol.svg";
import { ReactComponent as AdsIcon } from "./assets/ads.svg";
import { ReactComponent as JnIcon } from "./assets/jiaonang.svg";
// 定义组件的 Props 接口
interface IconProps {
  type: string;
  color?: string;
  size?: string;
  hoverBackground?: boolean;
  onClick?: () => void;
}
const Wrap = (props: any) => {
  return (
    <div className="p-1 rounded-full cursor-pointer hover:bg-gray-700">
      {props.children}
    </div>
  );
};
// Twitter or X
export const Twitter: React.FC<Omit<IconProps, "type">> = (props) => {
  return (
    <Wrap>
      <XIcon {...props} />
    </Wrap>
  );
};
// Telegram
export const Telegram: React.FC<Omit<IconProps, "type">> = (props) => {
  return (
    <Wrap>
      <TGIcon {...props} />
    </Wrap>
  );
};
// Website
export const Website: React.FC<Omit<IconProps, "type">> = (props) => {
  return (
    <Wrap>
      <WebIcon {...props} />
    </Wrap>
  );
};
// Solana
export const Solana: React.FC<Omit<IconProps, "type">> = (props) => {
  return (
    <Wrap>
      <SolIcon {...props} />
    </Wrap>
  );
};
// Ads
export const Ads: React.FC<Omit<IconProps, "type">> = (props) => {
  return <AdsIcon {...props} />;
};
// Jiaonang
export const Jiaonang: React.FC<Omit<IconProps, "type">> = (props) => {
  return <JnIcon {...props} />;
};
export default { Twitter, Telegram, Website, Solana, Ads, Jiaonang };
