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
      <div className="flex">
        <div className="h-[500px] flex-auto">
          <TradingViewWidget
            symbol="BTCUSD"
            theme={Themes.DARK}
            locale="fr"
            autosize
          />
          <div className="flex gap-2 my-2">
            <div className="bg-gray-700 rounded-lg p-1">Activity</div>
            <div className="opacity-25 bg-gray-800 rounded-lg p-1">
              Holders(196)
            </div>
            <div className="opacity-25 bg-gray-800 rounded-lg p-1">
              My Postion(0)
            </div>
          </div>
          <div className="flex divide-x divide-gray-600 max-w-max rounded-lg my-2 px-2 border border-gray-800">
            <div className="bg-zinc-900 p-1">All</div>
            <div className="bg-zinc-900 p-1 opacity-25">Smart</div>
            <div className="bg-zinc-900 p-1 opacity-25">KOL/VC</div>
            <div className="bg-zinc-900 p-1 opacity-25">Whale</div>
            <div className="bg-zinc-900 p-1 opacity-25">Snipers(1)</div>
            <div className="bg-zinc-900 p-1 opacity-25">Top</div>
            <div className="bg-zinc-900 p-1 opacity-25">DEV</div>
            <div className="bg-zinc-900 p-1 opacity-25">Following</div>
            <div className="bg-zinc-900 p-1 opacity-25">Insiders(1)</div>
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
