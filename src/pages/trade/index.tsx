// import { useEffect } from "react";
// const DocsPage = () => {
//   return (
//     <div className="container-fluid main_content">
//       <div className="row d-flex flex-wrap">
//         <div className="col-xl-9 d-flex flex-column" style={{ width: "100%" }}>
//           <div className="inner_left">
//             <div className="profile_cover_wrapper">
//               <div
//                 className="cover_wrapper d-flex align-items-end"
//                 style={{
//                   backgroundImage:
//                     " url('assets/images/profile/profile_bg.png')",
//                 }}
//               >
//                 <div className="profile_wrapper d-flex align-items-center align-items-md-start">
//                   <div className="img_wrapper">
//                     <a href="user-about.html">
//                       <img
//                         src="assets/images/profile/profile.png"
//                         alt="Profile Picture"
//                       />
//                     </a>
//                   </div>
//                   <div className="info_wrapper">
//                     <a href="user-about.html">Stephen Curry</a>
//                     <p>Golden State Warriors</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="price_info_wrapper">
//                 <div className="hst sta">
//                   <div className="row d-flex align-items-center">
//                     <div className="col-sm text-center shares">
//                       <h4>
//                         <i className="fas fa-dollar-sign"></i> 0.00{" "}
//                         <span>(0 Shares)</span>
//                       </h4>
//                       <p>Total Value</p>
//                     </div>
//                     <div className="col-sm text-center price">
//                       <h4>
//                         <i className="fas fa-dollar-sign"></i> 1.06
//                       </h4>
//                       <p>Current Price</p>
//                     </div>
//                     <div className="col-sm text-center change">
//                       <h4>
//                         <i className="fas fa-dollar-sign"></i> 0.21 (11%){" "}
//                         <span className="fas fa-sort-up"></span>
//                       </h4>
//                       <p>24H Change</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="range_wrapper">
//               <div className="btns text-center">
//                 <button className="btn trd_tab activeb" data-tab="buy">
//                   BUY SHARES
//                 </button>
//                 <button className="btn trd_tab" data-tab="sell">
//                   SELL SHARES
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-xl-9">
//           <footer className="user_footer">
//             <div className="container-fluid p-0">
//               <div className="row footer_nav d-flex align-items-center">
//                 <div className="col-lg-7">
//                   <ul className="nav justify-content-center justify-content-sm-start">
//                     <li className="nav-item">
//                       <a className="nav-link ml-0" href="contact.html">
//                         CONTACT US
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="#">
//                         TERMS OF USE
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link" href="#">
//                         PRIVACY POLICY
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-lg-5">
//                   <ul className="nav justify-content-center justify-content-sm-start justify-content-lg-end">
//                     <li className="nav-item">
//                       <a className="nav-link ml-0" href="#">
//                         <img
//                           src="assets/images/footer/apple_store.png"
//                           alt="Download from Apple Store"
//                         />
//                       </a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link mr-0" href="#">
//                         <img
//                           src="assets/images/footer/google_store.png"
//                           alt="Download from Google Play Store"
//                         />
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <hr />
//               <div className="row footer_copyright d-flex align-items-center">
//                 <div className="col-lg-7 text-center text-sm-start">
//                   <p className="para">
//                     Copyright &#169; 2021. Made with passion by{" "}
//                     <a href="https://themeforest.net/user/Bold Exchange/portfolio">
//                       Bold Exchange
//                     </a>
//                   </p>
//                 </div>
//                 <div className="col-lg-5 text-center text-sm-start text-lg-end">
//                   <p className="para">All rights reserved</p>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocsPage;

// TradingViewWidget.jsx
// TradingViewWidget.jsx
import { CopyText } from "@/components";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

import Tl from "./Tl";
import PoolInfo from "./PoolInfo";
import DataStatistics from "./DataStatistics";
import Buy from "./Buy";
import Charts from "./Charts";
import { SyncOutlined } from "@ant-design/icons";
import { Rate } from "antd";
// 测试数据
const data = [
  { title: "Total liq", value: "$5,770.94(20.54 SOL)" },
  { title: "Market cap", value: "$3,09" },
  { title: "Holders", value: "196" },
  { title: "Total supply", value: "930.6M" },
  { title: "Pair", value: <CopyText text={"De9fp22222222han"} /> },
  {
    title: "Token creator",
    value: <CopyText text={"Hr2hz222333333322yiE"} extension="(0SOL)" />,
  },
  { title: "Pool created", value: "07/02/2024 19:03" },
];
const App = () => {
  return (
    <div>
      <div className="flex items-center mb-4 gap-2 px-2">
        <Rate count={1} />
        <img
          width={64}
          src="https://gmgn.ai/static/avator_new/140.png"
          className="rounded-full"
          alt="avatar"
        />
        <div className="text-gray-500 text-sm">
          <p className="flex items-center gap-2 text-white text-lg">
            <span>STASHY</span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              Mustache Cat
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
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                height="12px"
                fill="#9AA0AA"
                viewBox="0 0 16 16"
              >
                <path d="M14.144.528c.091.158.138.337.138.519v13.148a1.046 1.046 0 01-1.566.909l-5.53-3.16v2.251c0 .176.001.364-.036.514a.793.793 0 01-.18.357 1.047 1.047 0 01-.811.383H4.947a.95.95 0 01-.63-.23.801.801 0 01-.299-.612V11.81H2.762a1.047 1.047 0 01-1.047-1.047V4.48c0-.579.469-1.047 1.047-1.047h4.19L12.715.138a1.047 1.047 0 011.428.39z"></path>
              </svg>
              ads
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                height="12px"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <g clip-path="url(#clip0_7920_513)">
                  <path d="M9.282 1h1.71L7.255 5.27l4.394 5.809H8.21L5.515 7.555 2.43 11.08H.721l3.995-4.567L.5 1h3.528l2.436 3.22L9.282 1zm-.6 9.056h.947L3.513 1.97H2.497l6.185 8.086z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_7920_513">
                    <rect width="12" height="12"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                height="12px"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <g clip-path="url(#clip0_7920_515)">
                  <path d="M11.894 1.91l-1.8 8.487c-.134.6-.49.746-.992.465L6.36 8.842l-1.322 1.273c-.147.147-.27.27-.551.27l.196-2.793L9.764 3c.22-.196-.05-.307-.344-.11L3.138 6.844.43 6c-.588-.183-.6-.588.122-.869l10.582-4.078c.49-.183.918.11.76.857z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_7920_515">
                    <rect width="12" height="12"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                height="12px"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <g clip-path="url(#clip0_1553_2200)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM6.446 2.831A8.037 8.037 0 003.07 6h2.323c.212-1.023.505-1.96.865-2.77.06-.136.123-.269.188-.399zM2 10c0-.69.088-1.36.252-2h2.842a21.008 21.008 0 000 4H2.252A8.013 8.013 0 012 10zm1.07 4a8.037 8.037 0 003.376 3.169 9.877 9.877 0 01-.188-.399c-.36-.81-.653-1.747-.865-2.77H3.07zm4.372 0c.173.732.392 1.392.643 1.958.328.738.693 1.273 1.047 1.61.35.333.641.432.868.432.227 0 .518-.1.867-.432.355-.337.72-.872 1.048-1.61.251-.566.47-1.226.643-1.958H7.442zm7.165 0a13.716 13.716 0 01-.865 2.77c-.06.136-.123.269-.188.399A8.037 8.037 0 0016.93 14h-2.323zm3.14-2h-2.841a21.027 21.027 0 000-4h2.842c.165.64.252 1.31.252 2s-.087 1.36-.252 2zm-4.851 0H7.104A18.907 18.907 0 017 10c0-.693.037-1.362.104-2h5.792c.067.638.104 1.307.104 2 0 .693-.037 1.362-.104 2zm1.71-6h2.324a8.037 8.037 0 00-3.376-3.169c.065.13.128.263.188.399.36.81.653 1.747.865 2.77zm-6.52-1.958c-.252.566-.47 1.226-.644 1.958h5.116a11.248 11.248 0 00-.643-1.958c-.328-.738-.693-1.273-1.047-1.61C10.518 2.099 10.226 2 10 2c-.227 0-.518.1-.868.432-.354.337-.719.872-1.047 1.61z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1553_2200">
                    <rect width="20" height="20"></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                height="12px"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM6.465 5.501a.386.386 0 00-.266.11L4.39 7.42a.188.188 0 00.133.32h9.164c.101 0 .197-.04.266-.109l1.81-1.81a.188.188 0 00-.133-.32H6.465zm0 6.758a.376.376 0 00-.266.11l-1.81 1.81a.188.188 0 00.133.32h9.164c.101 0 .197-.04.266-.11l1.81-1.81a.188.188 0 00-.133-.32H6.465zm7.487-3.289a.376.376 0 00-.266-.11H4.522a.188.188 0 00-.133.321l1.81 1.81c.07.07.165.11.266.11h9.164a.188.188 0 00.133-.32l-1.81-1.81z"
                ></path>
              </svg>
            </span>
            <div className="flex items-center gap-1 text-gray-500 text-xs border border-gray-500 rounded-lg px-2 py-1">
              <div className="rounded-lg bg-green-700 p-1 w-1 h-1"></div>
              Snipers:1/70
            </div>
          </p>
          <p className="flex items-center gap-2">
            <CopyText text={"966jE8s7ZYvkndiPF1jbFfPs5T89p7QaFP7FBsEamsAb"} />
            <span className="text-gray-500 text-xs">12d ago</span>
            <span className="flex items-center gap-1 text-red-500 text-xs">
              <img
                width={12}
                src={"https://gmgn.ai/static/img/creator_run.webp"}
              />
              Dev Sell All
            </span>
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="h-[500px] flex-auto">
          <TradingViewWidget
            symbol="BTCUSD"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
          <div className="flex gap-2 my-2">
            <div className="bg-gray-700 rounded-lg p-1 hover:bg-gray-700">
              Activity
            </div>
            <div className="opacity-25 bg-gray-700 rounded-lg p-1 hover:opacity-100">
              Holders(196)
            </div>
            <div className="opacity-25 bg-gray-700 rounded-lg p-1 hover:opacity-100">
              My Postion(0)
            </div>
          </div>
          <div className="flex divide-x divide-gray-600 max-w-max rounded-lg my-2 px-2 border border-gray-800">
            <div className="bg-zinc-900 p-1">All</div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              Smart
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              KOL/VC
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              Whale
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              Snipers(1)
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              Top
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              DEV
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              Following
            </div>
            <div className="bg-zinc-900 p-1 opacity-25 hover:opacity-100">
              Insiders(1)
            </div>
          </div>

          <Tl />
        </div>
        <div
          className="w-[320px] flex flex-col gap-4"
          style={{ marginLeft: "20px" }}
        >
          <Buy />
          <DataStatistics />
          <PoolInfo title="Pool Info" data={data} more={<a href="#">-</a>} />
        </div>
      </div>
    </div>
  );
};
export default App;
