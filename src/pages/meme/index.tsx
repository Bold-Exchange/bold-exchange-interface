import { TagSelector } from "@/components";
import Tl from "../index/Tl";
import { CopyOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useState } from "react";
const Meme = () => {
  const [v, setV] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="font-bold flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <g clip-path="url(#clip0_8532_4982)">
              <rect
                x="10.5"
                y="-1.5"
                width="9.296"
                height="16.971"
                rx="4.648"
                transform="rotate(45 10.5 -1.5)"
                fill="#fff"
              ></rect>
              <path
                d="M4.703 4.297L1.786 7.213a4.648 4.648 0 006.574 6.574l2.916-2.917-6.573-6.573z"
                fill="#52D48F"
              ></path>
              <path
                d="M7.865 13.291A3.948 3.948 0 112.28 7.708l5.427-5.426a3.948 3.948 0 115.583 5.583L7.865 13.29zm5.921-11.504a4.648 4.648 0 00-6.573 0L1.787 7.213a4.648 4.648 0 106.573 6.574l5.427-5.427a4.648 4.648 0 000-6.573z"
                fill="#044735"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_8532_4982">
                <rect width="16" height="16" fill="#fff"></rect>
              </clipPath>
            </defs>
          </svg>
          Pump
        </div>
        <div className="font-bold flex items-center gap-1 opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            fill="#dfff18"
            viewBox="0 0 16 16"
          >
            <g clip-path="url(#clip0_8890_490)">
              <path d="M15.807 10.498c.126-.372-.29-.676-.65-.521A6.703 6.703 0 016.574.702c.182-.347-.089-.785-.47-.688a8.119 8.119 0 109.701 10.484z"></path>
              <path d="M13.3 1.284a.447.447 0 01.73.387l-.148 1.535a1.34 1.34 0 00.365 1.055l1.076 1.125c.297.31.027.82-.396.75L13.39 5.88a1.34 1.34 0 00-1.078.292l-1.185.987a.447.447 0 01-.731-.387l.149-1.535a1.34 1.34 0 00-.366-1.055L9.105 3.056a.447.447 0 01.396-.75l1.536.257a1.34 1.34 0 001.078-.292l1.185-.987z"></path>
            </g>
            <defs>
              <clipPath id="clip0_8890_490">
                <rect width="16" height="16"></rect>
              </clipPath>
            </defs>
          </svg>
          Moonshot
        </div>
        <div className="font-bold opacity-50 mr-2">Booster</div>
        <TagSelector
          tags={["Pump", "New Creation", "Completing"]}
          onTagSelect={(e: string) => {
            setV(e != "Pump");
          }}
        />
      </div>
      {(v && <Tl />) || (
        <div className="grid gap-4 grid-cols-3 flex-1">
          <div className="flex flex-col bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🌱 New Pool</div>
            <div className="overflow-y-auto flex-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">🔥 Burnt</div>
            <div className="overflow-y-auto">
              {Array.from({ length: 7 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg">
            <div className="border-b border-gray-700 p-2">
              🦅 DEXScreener Spent
            </div>
            <div className="overflow-y-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <Item key={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Meme;
