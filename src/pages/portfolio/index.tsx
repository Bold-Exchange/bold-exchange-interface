import { useEffect } from "react";
import { InfoItem } from "@/components";
import Tl from "./Tl";
const Docspage = () => {
  return (
    <>
      <div>
        <div className="flex items-center mb-4">
          <img width={64} src="https://gmgn.ai/static/avator_new/140.png" />
          <div>
            <p>966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb</p>
            <p> Updated: 1min ago</p>
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
