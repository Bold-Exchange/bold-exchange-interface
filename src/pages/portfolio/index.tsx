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
        <div className="grid grid-cols-3 justify-between mb-4 gap-2">
          <div className="flex-auto bg-gray-900 rounded-md p-2">
            <InfoItem
              title={<span className="text-white text-sm">Last 7D PnL</span>}
            >
              <span className="text-white text-sm">Win Rate</span>
            </InfoItem>
            <InfoItem
              title={<span className="text-red-500 text-lg">-1.33%</span>}
            >
              <span className="text-white text-lg">33%</span>
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-2">
                  <span className="text-red-500">-$47.02</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      fill="#9AA0AA"
                      viewBox="0 0 16 16"
                    >
                      <g clip-path="url(#clip0_7009_491)">
                        <path d="M5.89 1.305a.5.5 0 01.371-.602 7.503 7.503 0 017.19 12.452.5.5 0 01-.816-.131l-1.087-2.312a.5.5 0 01.905-.425l.755 1.606A6.502 6.502 0 006.493 1.675a.5.5 0 01-.602-.37z"></path>
                        <path d="M2.992 2.695a.5.5 0 01.374.281l1.087 2.31a.5.5 0 01-.905.426l-.755-1.605a6.502 6.502 0 006.714 10.218.5.5 0 01.232.973A7.503 7.503 0 012.55 2.845a.5.5 0 01.442-.15z"></path>
                        <path d="M5.5 7A1.5 1.5 0 017 5.5h.5V5a.5.5 0 011 0v.5H10a.5.5 0 010 1H7a.5.5 0 000 1h2a1.5 1.5 0 110 3h-.5v.5a.5.5 0 01-1 0v-.5H6a.5.5 0 010-1h3a.5.5 0 000-1H6.997A1.5 1.5 0 015.5 7z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_7009_491">
                          <rect width="16" height="16"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    USD
                  </span>
                </div>
              }
            >
              {" "}
            </InfoItem>
          </div>
          <div className="flex-auto bg-gray-900 rounded-md p-2">
            <InfoItem title={<span className="text-white text-sm">PnL</span>}>
              <span className="text-white">
                7D TXs <span className="text-green-500">6</span>/
                <span className="text-red-500">6</span>
              </span>
            </InfoItem>
            <InfoItem title="Total PnL">
              <span className="text-green-500">+$14.9K (+21.09%)</span>
            </InfoItem>
            <InfoItem title="Unrealized Profits">
              <span className="text-red-500">-$2,963.35 </span>
            </InfoItem>
            <InfoItem title="7D Total Cost">
              <span className="text-white">$7,090.1</span>
            </InfoItem>
            <InfoItem title="7D Token Avg Cost">
              <span className="text-white">$10.1K</span>
            </InfoItem>
            <InfoItem title="7D Token Avg Realized Profits">
              <span className="text-green-500">+$1.49</span>
            </InfoItem>
            <InfoItem title="SOL Balance">
              <span className="text-green-500">
                <span className="text-white">14.63 SOL</span> ($2,096.91)
              </span>
            </InfoItem>
          </div>
          <div className="flex-auto bg-gray-900 rounded-md p-2">
            <InfoItem
              title={
                <span className="text-white text-sm">Distribution (7)</span>
              }
            >
              {" "}
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-green-500"></div>
                  {`>500%`}
                </div>
              }
            >
              0
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-green-700"></div>
                  {`200%~500%`}
                </div>
              }
            >
              0
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-green-900"></div>
                  {`0%~200%`}
                </div>
              }
            >
              <span className="text-green-900">4 (57.14%)</span>
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-red-900"></div>
                  {`0%~200%`}
                </div>
              }
            >
              <span className="text-red-900">0</span>
            </InfoItem>
            <InfoItem
              title={
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-3 h-3 bg-red-500"></div>
                  {`0%~200%`}
                </div>
              }
            >
              <span className="text-red-500">3 (42.86%)</span>
            </InfoItem>
            <div className="flex rounded-full h-2 w-full bg-gray-700 overflow-hidden">
              <div className="bg-green-900   w-1/2"></div>
              <div className="bg-red-900 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <Tl />
    </>
  );
};

export default Docspage;
