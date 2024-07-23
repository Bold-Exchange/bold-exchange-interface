import { CopyOutlined } from "@ant-design/icons";

const Item = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-2 py-4 border-b border-gray-800">
      <img
        className=" w-12 rounded-full"
        src="https://node1.irys.xyz/krc_fx_vxBpHUVhHT5sjKpaNzvbD6LZnq8Bw_chObVY"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            PWIF <CopyOutlined />
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" fill="#595000"></circle>
              <path
                d="M8.327 12.602l3.39-5.086a.435.435 0 00-.36-.676H8.69V3.638a.435.435 0 00-.797-.241l-3.39 5.086a.435.435 0 00.362.676H7.53v3.202a.435.435 0 00.796.241z"
                fill="#FFEC42"
              ></path>
            </svg>
            Buy
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-500">50s</span>
          <span className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="#88D693"
              viewBox="0 0 16 16"
            >
              <path d="M14.78 3.47a.75.75 0 010 1.06l-8 8a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 011.06-1.06l3.97 3.97 7.47-7.47a.75.75 0 011.06 0z"></path>
            </svg>
          </span>
          <span className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="#88D693"
              viewBox="0 0 16 16"
            >
              <path d="M14.78 3.47a.75.75 0 010 1.06l-8 8a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 011.06-1.06l3.97 3.97 7.47-7.47a.75.75 0 011.06 0z"></path>
            </svg>
          </span>
          <span className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="#88D693"
              viewBox="0 0 16 16"
            >
              <path d="M14.78 3.47a.75.75 0 010 1.06l-8 8a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 011.06-1.06l3.97 3.97 7.47-7.47a.75.75 0 011.06 0z"></path>
            </svg>
          </span>
          <span className="text-red-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="#F04866"
              viewBox="0 0 16 16"
            >
              <path d="M3 10.893A2.893 2.893 0 015.893 8a.2.2 0 01.166.089L7.667 10.5a.4.4 0 00.666 0L9.94 8.089A.2.2 0 0110.107 8 2.893 2.893 0 0113 10.893v2.845a.262.262 0 01-.262.262H3.262A.262.262 0 013 13.738v-2.845z"></path>
              <circle cx="8" cy="4" r="3"></circle>
            </svg>
            0%
          </span>
          <span className="text-green-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="#88D693"
              viewBox="0 0 20 20"
            >
              <path d="M15 6A5 5 0 115 6a5 5 0 0110 0z"></path>
              <path d="M10 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
              <path d="M19 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"></path>
              <path d="M5 8a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V9a1 1 0 00-1-1H5zm1.7 8h6.6a.7.7 0 110 1.4H6.7a.7.7 0 110-1.4z"></path>
            </svg>
            0%
          </span>
          <span className="text-green-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 8a3.5 3.5 0 10-3.463-2.988 2.953 2.953 0 00-.1-.012C7.844 5 6.274 7.972 6 9.457c.379.46 1.49 1.495 2.905 1.947-1.099 1.254-1.56 4.194-1.71 6.275-1.042-.093-2.369-.287-3.614-.653-.677-.2-1.047-.599-1.247-1.116-.211-.546-.242-1.248-.15-2.021.117-1.003.432-1.897.696-2.648.056-.158.11-.31.158-.456.08-.236.149-.44.198-.604.233-.779-.11-1.498-.532-1.914-.408-.404-1.243-.744-1.638-.744v.986c.268.086.65.274.914.537.253.25.356.51.262.823-.038.126-.096.298-.166.506-.073.215-.176.476-.291.768-.326.828-.752 1.905-.867 2.893-.1.843-.148 1.732.148 2.497.307.793 1.1 1.44 2.17 1.884 1.711.595 3.153.595 4.09.595h.011L7.349 19h9.64c.045-.268.026-6.977-1.804-11.014.104.01.209.014.315.014zM11 8a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
              <path d="M11 4c0 .039 0 .078-.002.116-2.138.334-3.601 1.338-4.553 2.45A3 3 0 1111 4z"></path>
            </svg>
            0%
          </span>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div className="text-right flex items-center gap-1">
            <span>
              <span className="text-gray-500">Liq:</span>
              <span className="text-white">$36k</span>
            </span>
            <span>
              <span className="text-gray-500">MC:</span>
              <span className="text-white">$36k</span>
            </span>
            <span className="flex items-center">
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#9AA0AA"
                  viewBox="0 0 12 12"
                >
                  <path d="M4 5a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path d="M4 6c-1.657 0-3 .5-3 3a2 2 0 002 2h2a2 2 0 002-2c0-2.5-1.343-3-3-3z"></path>
                  <path d="M7.195 10.831c.22.097.418.169.605.169h1.6A1.6 1.6 0 0011 9.4C11 7.5 9.925 7 8.6 7c-.54 0-.947.149-1.194.36.402.535.506 1.144.506 1.864 0 .577-.32 1.272-.717 1.607z"></path>
                  <path d="M7 4.6a1.6 1.6 0 103.2 0 1.6 1.6 0 00-3.2 0z"></path>
                </svg>
              </span>
              <span className="text-white">$36k</span>
            </span>
            <span>
              <span className="text-gray-500">1h TXs:</span>
              <span className="text-white">14</span>
            </span>
            <span>
              <span className="text-gray-500">1h V:</span>
              <span className="text-white">$14</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
