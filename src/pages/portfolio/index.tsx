import { useEffect } from "react";
import { InfoItem, CopyText } from "@/components";
import Tl from "./Tl";
import { SyncOutlined } from "@ant-design/icons";
const Docspage = () => {
  return (
    <>
      <div>
        <div className="flex items-start mb-4 gap-2">
          <img
            width={64}
            src="https://gmgn.ai/static/avator_new/140.png"
            className="rounded-full"
            alt="avatar"
          />
          <div className="text-gray-500 text-sm">
            <p className="text-white text-lg">7DWMy...jwz</p>
            <p>
              <CopyText
                text={"966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb"}
                startLength={100}
              />
            </p>
            <p className="my-2">
              <SyncOutlined /> Updated: 1min ago
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-4 gap-2">
          <div className="flex-auto bg-gray-900 rounded-md">
            <InfoItem
              title="Last 7D PnL
"
            >
              {" "}
              Win Rate
            </InfoItem>
            <InfoItem title="+19.9%">--%</InfoItem>
            <InfoItem
              title="+$11.33
USD"
            >
              {" "}
            </InfoItem>
          </div>
          <div className="flex-auto bg-gray-900 rounded-md">
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>
          </div>
          <div className="flex-auto bg-gray-900 rounded-md">
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>{" "}
            <InfoItem title="+19.9%">--%</InfoItem>
          </div>
        </div>
      </div>
      <Tl />
    </>
  );
};

export default Docspage;
