import { Rate,theme } from "antd";
import { Media,CopyText,Heart } from "@/components";
import { ReactComponent as IconHeart } from "./heart-follow.svg";
const Token = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        <img
          className=" rounded"
          width={32}
          src="https://images.blur.io/_blur-prod/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/4142-e95a5f542b67c752?w=64"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1">
          <CopyText text={"5qArt...ump5qArt...ump"}/>
          <Heart />
        </p>
      </div>
    </div>
  );
};
export default Token;
