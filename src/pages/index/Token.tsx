import { Rate } from "antd";
import { Media } from "@/components";
import { StarFilled } from "@ant-design/icons";

interface TokenProps {
  address: string;
  name: string;
  imageUrl?: string;
}

const Token: React.FC<TokenProps> = ({ address, name, imageUrl }) => {
  return (
    <div className="flex items-center gap-2">
      <StarFilled
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <div className="flex">
        <img
          className=" rounded-full"
          width={32}
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <p className="flex items-center gap-1 m-0">
          <span className="font-bold text-white">{name}</span>
        </p>
        <p className="flex">
          <span className="text-gray-500">{address.slice(0, 6)}...{address.slice(-4)}</span>
          {/*<Media />*/}
        </p>
      </div>
    </div>
  );
};

export default Token;
