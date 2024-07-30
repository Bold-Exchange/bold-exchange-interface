import { Rate } from "antd";
import { Media } from "@/components";
import { StarFilled } from "@ant-design/icons";
const Token = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        <img
          className=" rounded-full"
          width={32}
          src="https://dd.dexscreener.com/ds-data/tokens/solana/5qArTiQY4hhudpN6rMYitG7AmMNRtW9XcVwNXc8Gpump.png"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1">
          <span className="font-bold text-white">NODAL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            fill="#88D693"
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
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            fill="#88D693"
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
          🔥
        </p>
        <p className="flex">
          <span className="text-gray-500">5qArt...ump</span>
          <Media />
        </p>
      </div>
    </div>
  );
};
export default Token;
