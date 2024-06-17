import React from 'react';

export default function Home() {
  return (
    <div className="cs">
      {/* <!--===preloader start===--> */}
      <div className="loader_wrapper" id="preloader" style={{ opacity: 0, display: "none" }}>
        <div className="loader">
          <div className="face">
            <div className="circle"></div>
          </div>
          <div className="face">
            <div className="circle sd"></div>
          </div>
          <div className="percent">
            <span className="counterr">100</span><span className="per">%</span>
          </div>
        </div>
      </div>
      {/* <!--===preloader end===--> */}

      {/* <!--page wrapper start--> */}
      <div className="page_wrapper">
        {/* <!--left sidebar--> */}
        <div className="sidebar">
          <div className="brand_wrapper text-center d-flex align-items-center justify-content-around">
            <a href="index.html" className="brand">
              {/* <!--====logo start====--> */}
              <img src="assets/images/logo.png" alt="Spovest Logo" id="logo" />
              {/* <!--====logo end====--> */}
            </a>
            <div className="close_sidenav d-xxl-none" title="Close Side Bar">
              <i className="flaticon-back"></i>
            </div>
          </div>
          <div className="user_wrapper">
            <div className="profile_wrapper text-center">
              <div className="profile_content">
                <a href="user-about.html" className="profile">
                  {/* <!--====small profile picture start====--> */}
                  <img src="assets/images/user/profile-sm.png" alt="Profile Picture" />
                  {/* <!--====small profile picture end====--> */}
                </a>
                <span className="d-flex align-items-center justify-content-center">12</span>
              </div>
              <h5 className="text-center">
                <a href="user-about.html">ED WALSH</a>
              </h5>
            </div>
            <div className="follow_wrapper d-flex align-items-center justify-content-around">
              <div className="follower d-flex align-items-center justify-content-between">
                <div className="icon">
                  <i className="flaticon-user-profile"></i>
                </div>
                <div className="amount">
                  <a href="user-about.html">2,239</a>
                  <p>FOLLOWERS</p>
                </div>
              </div>
              <div className="following d-flex align-items-center justify-content-between">
                <div className="icon">
                  <i className="flaticon-user-profile"></i>
                </div>
                <div className="amount">
                  <a href="user-about.html">5,339</a>
                  <p>FOLLOWING</p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio_wrapper">
            <ul className="nav flex-column portfolio">
              <li className="nav-item">
                <a href="user-portfolio.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-briefcase"></i> My Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="user-about.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-user"></i> About
                </a>
              </li>
            </ul>
          </div>
          <div className="trading_wrapper">
            <h5>Trading</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-basketball-ball-variant"></i> NBA
                </a>
              </li>
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-rugby"></i> NFL
                </a>
              </li>
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-baseball-ball-1"></i> MLB
                </a>
              </li>
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-ice-hockey"></i> NHL
                </a>
              </li>
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-football"></i> Soccer
                </a>
              </li>
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-golf"></i> Golf
                </a>
              </li>
              <li className="nav-item">
                <a href="league.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-swords"></i> ESports
                </a>
              </li>
            </ul>
          </div>
          <div className="affiliate_wrapper">
            <ul className="nav flex-column affiliate">
              <li className="nav-item">
                <a href="affiliate.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-affiliate"></i> Affiliate Program
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-chat"></i> Support
                </a>
              </li>
              <li className="nav-item">
                <a href="rules.html" className="nav-link d-flex align-items-center">
                  <i className="flaticon-document"></i> Rules
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar_footer d-flex align-items-center justify-content-around">
            <div className="left_col">
              <select name="selectPicker" id="language" style={{ display: "none" }}>
                <option value="english">English</option>
                <option value="spain">Spanish</option>
                <option value="bangla">Bangla</option>
              </select>
              <div className="nice-select" tabIndex={0}>
                <span className="current">English</span>
                <ul className="list">
                  <li data-value="english" className="option selected">English</li>
                  <li data-value="spain" className="option">Spanish</li>
                  <li data-value="bangla" className="option">Bangla</li>
                </ul>
              </div>
            </div>
            <div className="right_col">
              <div className="switch_wrapper">
                <button className="btn switcher" id="light" title="Switch to Light Theme">
                  <i className="fas fa-star-and-crescent"></i>
                </button>
                <button className="btn switcher actives" id="dark" title="Switch to Dark Theme">
                  <i className="fas fa-adjust"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!--left sidebar--> */}
        {/* <!--body content--> */}
        <div className="body_content">
          {/* <!--top bar--> */}
          <div className="container-fluid top_bar fixed-top">
            <div className="top_bar_wrapper d-flex align-items-center justify-content-between">
              <div className="search_bar d-flex align-items-center">
                <div className="show_hide d-flex align-items-center">
                  <button type="button" id="click" title="Toggle Side Bar">
                    <span className="toggle_bar_one"></span>
                    <span className="toggle_bar_two"></span>
                    <span className="toggle_bar_three"></span>
                  </button>
                </div>
                <div className="form">
                  <form action="#" method="post" id="forSm">
                    <input type="search" name="searchBar" id="searchPlayers" placeholder="Search Players" required />
                    <button type="submit">
                      <i className="flaticon-loupe"></i>
                    </button>
                  </form>
                  <a href="javascript:void(0)" className="search_toggle d-block d-md-none">
                    <i className="flaticon-loupe"></i>
                  </a>
                </div>
              </div>
              <div className="user_bar d-flex align-items-center justify-content-end">
                <div className="search_wrapper">
                  <a href="javascript:void(0)" className="search_sm d-none">
                    <i className="flaticon-loupe d-flex align-items-center"></i>
                  </a>
                </div>
                <div className="dollar_wrapper">
                  <a href="#">$500.00</a>
                </div>
                <div className="wallet_wrapper">
                  <a href="#">
                    <i className="flaticon-wallet-filled-money-tool"></i>
                  </a>
                </div>
                <div className="notification_wrapper">
                  <a href="#">
                    <i className="flaticon-bell"></i>
                  </a>
                </div>
                <div className="profile_wrapper d-flex align-items-center">
                  <div className="img_wrapper">
                    <a href="user-about.html">
                      <img src="assets/images/user/profile-sm.png" alt="Profile Picture" />
                    </a>
                  </div>
                  <div className="drop">
                    <a href="javascript:void(0)" className="profile_link disable">Ed Walsh <i className="fas fa-caret-down"></i></a>
                    <div className="drop_content">
                      <a href="user-about.html">Profile</a>
                      <a href="#">Settings</a>
                      <a href="#">Log Out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--top bar--> */}
          {/* <!--main content--> */}
          <div className="container-fluid main_content">
            <div className="row d-flex flex-wrap">
              <div className="col-xl-9 d-flex flex-column">
                <div className="inner_left">
                  <div className="profile_cover_wrapper">
                    <div className="cover_wrapper d-flex align-items-end" style={{ backgroundImage: "url('assets/images/profile/profile_bg.png')" }}>
                      <div className="profile_wrapper d-flex align-items-center align-items-md-start">
                        <div className="img_wrapper">
                          <a href="#">
                            <img src="assets/images/profile/profile.png" alt="Profile Picture" />
                          </a>
                        </div>
                        <div className="info_wrapper">
                          <a href="league.html">Stephen Curry</a>
                          <p>Golden State Warriors</p>
                        </div>
                      </div>
                    </div>
                    <div className="price_info_wrapper">
                      <div className="hst">
                        <div className="row d-flex align-items-center">
                          <div className="col-sm text-center text-md-start shares">
                            <h4><i className="fas fa-dollar-sign"></i> 0.00 <span>(0 Shares)</span></h4>
                            <p>Total Value</p>
                          </div>
                          <div className="col-sm text-center price">
                            <h4><i className="fas fa-dollar-sign"></i> 1.06</h4>
                            <p>Current Price</p>
                          </div>
                          <div className="col-sm text-center change">
                            <h4><i className="fas fa-dollar-sign"></i> 0.21 (11%) <span className="fas fa-sort-up"></span></h4>
                            <p>24H Change</p>
                          </div>
                          <div className="col-sm text-center btns">
                            <a href="#" className="btn btn-primary">Sell</a>
                            <a href="#" className="btn btn-primary">Buy</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="labels_wrapper">
                      <div className="row">
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">1.0</p>
                          <p className="name">Games</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">15.6</p>
                          <p className="name">Points</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">2.9</p>
                          <p className="name">Assists</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">3.6</p>
                          <p className="name">Rebounds</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">1.4</p>
                          <p className="name">Steals</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">28.6</p>
                          <p className="name">Minutes</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">25.6</p>
                          <p className="name">Ftps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fan_price_chart_wrapper">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="fantasy_wrapper" style={{ position: "relative" }}>
                          <h6>Fantasy Trends</h6>
                          {/* <div id="fantasyChart" style={{ minHeight: "265px" }}>
                            <div id="apexchartsagfzpepz" className="apexcharts-canvas apexchartsagfzpepz apexcharts-theme-light" style={{ width: "439px", height: "250px" }}>
                              <svg id="SvgjsSvg1161" width="439" height="250" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: "transparent" }}>
                                <g id="SvgjsG1163" className="apexcharts-inner apexcharts-graphical" transform="translate(41.4375, 30)">
                                  <defs id="SvgjsDefs1162"><clipPath id="gridRectMaskagfzpepz">
                                    <rect id="SvgjsRect1169" width="384.65625" height="189.393" x="-3.5" y="-1.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                  </clipPath><clipPath id="gridRectMarkerMaskagfzpepz"><rect id="SvgjsRect1170" width="381.65625" height="190.393" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs>
                                  <line id="SvgjsLine1168" x1="0" y1="0" x2="0" y2="186.393" stroke="#b6b6b6" stroke-dasharray="3" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="186.393" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1176" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1177" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1179" font-family="$open-sans" x="0" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1180">Jan 2020</tspan><title>Jan 2020</title></text><text id="SvgjsText1182" font-family="$open-sans" x="62.94270833333333" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label ">
                                    <tspan id="SvgjsTspan1183">Feb 2020</tspan><title>Feb 2020</title></text><text id="SvgjsText1185" font-family="$open-sans" x="125.88541666666667" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label ">
                                      <tspan id="SvgjsTspan1186">Mar2020</tspan><title>Mar2020</title></text><text id="SvgjsText1188" font-family="$open-sans" x="188.82812500000003" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1189">Apr 2020</tspan><title>Apr 2020</title></text><text id="SvgjsText1191" font-family="$open-sans" x="251.77083333333334" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1192">May 2021</tspan><title>May 2021</title></text><text id="SvgjsText1194" font-family="$open-sans" x="314.71354166666663" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1195">Jun 2021</tspan><title>Jun 2021</title></text><text id="SvgjsText1197" font-family="$open-sans" x="377.65624999999994" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1198">Jul 2021</tspan><title>Jul 2021</title></text></g><line id="SvgjsLine1199" x1="0" y1="187.393" x2="377.65625" y2="187.393" stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1"></line></g><g id="SvgjsG1214" className="apexcharts-grid"><g id="SvgjsG1215" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine1224" x1="0" y1="0" x2="377.65625" y2="0" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1225" x1="0" y1="37.2786" x2="377.65625" y2="37.2786" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1226" x1="0" y1="74.5572" x2="377.65625" y2="74.5572" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1227" x1="0" y1="111.83579999999999" x2="377.65625" y2="111.83579999999999" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1228" x1="0" y1="149.1144" x2="377.65625" y2="149.1144" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1229" x1="0" y1="186.39299999999997" x2="377.65625" y2="186.39299999999997" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line></g><g id="SvgjsG1216" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1217" x1="0" y1="187.393" x2="0" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1218" x1="62.942708333333336" y1="187.393" x2="62.942708333333336" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1219" x1="125.88541666666667" y1="187.393" x2="125.88541666666667" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1220" x1="188.828125" y1="187.393" x2="188.828125" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1221" x1="251.77083333333334" y1="187.393" x2="251.77083333333334" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1222" x1="314.7135416666667" y1="187.393" x2="314.7135416666667" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1223" x1="377.65625" y1="187.393" x2="377.65625" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1231" x1="0" y1="186.393" x2="377.65625" y2="186.393" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine1230" x1="0" y1="1" x2="0" y2="186.393" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG1171" className="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1172" className="apexcharts-series"><path id="SvgjsPath1175" d="M 0 170.41645714285715L 62.94270833333333 122.48682857142859L 125.88541666666666 69.23168571428573L 188.828125 170.41645714285715L 251.77083333333331 31.95308571428572L 314.71354166666663 85.20822857142858L 377.65625 15.976542857142874" fill="none" fill-opacity="1" stroke="rgba(0,122,216,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0" className="apexcharts-line" clip-path="url(#gridRectMaskagfzpepz)" pathTo="M 0 170.41645714285715L 62.94270833333333 122.48682857142859L 125.88541666666666 69.23168571428573L 188.828125 170.41645714285715L 251.77083333333331 31.95308571428572L 314.71354166666663 85.20822857142858L 377.65625 15.976542857142874" pathFrom="M -1 223.6716L -1 223.6716L 62.94270833333333 223.6716L 125.88541666666666 223.6716L 188.828125 223.6716L 251.77083333333331 223.6716L 314.71354166666663 223.6716L 377.65625 223.6716"></path><g id="SvgjsG1173" className="apexcharts-series-markers-wrap" data:realIndex="0"><g className="apexcharts-series-markers"><circle id="SvgjsCircle1237" r="0" cx="0" cy="0" className="apexcharts-marker w3shfkvur no-pointer-events" stroke="#ffffff" fill="#04c1ff" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1174" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1232" x1="0" y1="0" x2="377.65625" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1233" x1="0" y1="0" x2="377.65625" y2="0" stroke-dasharray="0" stroke-width="0" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1234" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1235" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1236" className="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1167" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1200" className="apexcharts-yaxis" rel="0" transform="translate(8.4375, 0)"><g id="SvgjsG1201" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1202" font-family="$open-sans" x="20" y="31.5" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1203">42</tspan></text><text id="SvgjsText1204" font-family="$open-sans" x="20" y="68.7786" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1205">35</tspan></text><text id="SvgjsText1206" font-family="$open-sans" x="20" y="106.0572" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1207">28</tspan></text><text id="SvgjsText1208" font-family="$open-sans" x="20" y="143.3358" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1209">21</tspan></text><text id="SvgjsText1210" font-family="$open-sans" x="20" y="180.6144" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1211">14</tspan></text><text id="SvgjsText1212" font-family="$open-sans" x="20" y="217.89299999999997" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1213">7</tspan></text></g></g><g id="SvgjsG1164" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 125px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(0, 143, 251);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label"></span><span className="apexcharts-tooltip-text-value"></span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                          <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: "464px", height: "348px" }}></div></div><div className="contract-trigger"></div></div></div> */}
                      </div>
                      <div className="col-md-6">
                        {/* <div className="pri_wrapper" style={{ position: "relative" }}>
                          <h6>Price Trends</h6>
                          <div id="priceChart" style={{ minHeight: "265px" }}><div id="apexchartsffwagrc5i" className="apexcharts-canvas apexchartsffwagrc5i apexcharts-theme-light" style={{ width: "439px", height: "250px" }}><svg id="SvgjsSvg1239" width="439" height="250" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="apexcharts-svg" transform="translate(0, 0)" style={{ background: "transparent" }}><g id="SvgjsG1241" className="apexcharts-inner apexcharts-graphical" transform="translate(41.4375, 30)"><defs id="SvgjsDefs1240"><clipPath id="gridRectMaskffwagrc5i">
                            <rect id="SvgjsRect1247" width="384.65625" height="189.393" x="-3.5" y="-1.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskffwagrc5i"><rect id="SvgjsRect1248" width="381.65625" height="190.393" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine1246" x1="0" y1="0" x2="0" y2="186.393" stroke="#b6b6b6" stroke-dasharray="3" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="186.393" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG1254" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1255" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1257" font-family="$open-sans" x="0" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1258">Jan 2020</tspan><title>Jan 2020</title></text><text id="SvgjsText1260" font-family="$open-sans" x="62.94270833333333" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1261">Feb 2020</tspan><title>Feb 2020</title></text><text id="SvgjsText1263" font-family="$open-sans" x="125.88541666666667" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1264">Mar2020</tspan><title>Mar2020</title></text><text id="SvgjsText1266" font-family="$open-sans" x="188.82812500000003" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1267">Apr 2020</tspan><title>Apr 2020</title></text><text id="SvgjsText1269" font-family="$open-sans" x="251.77083333333334" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1270">May 2021</tspan><title>May 2021</title></text><text id="SvgjsText1272" font-family="$open-sans" x="314.71354166666663" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1273">Jun 2021</tspan><title>Jun 2021</title></text><text id="SvgjsText1275" font-family="$open-sans" x="377.65624999999994" y="215.393" text-anchor="middle" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-xaxis-label "><tspan id="SvgjsTspan1276">Jul 2021</tspan><title>Jul 2021</title></text></g><line id="SvgjsLine1277" x1="0" y1="187.393" x2="377.65625" y2="187.393" stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1"></line></g><g id="SvgjsG1292" className="apexcharts-grid"><g id="SvgjsG1293" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine1302" x1="0" y1="0" x2="377.65625" y2="0" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1303" x1="0" y1="37.2786" x2="377.65625" y2="37.2786" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1304" x1="0" y1="74.5572" x2="377.65625" y2="74.5572" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1305" x1="0" y1="111.83579999999999" x2="377.65625" y2="111.83579999999999" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1306" x1="0" y1="149.1144" x2="377.65625" y2="149.1144" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line><line id="SvgjsLine1307" x1="0" y1="186.39299999999997" x2="377.65625" y2="186.39299999999997" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-gridline"></line></g><g id="SvgjsG1294" className="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1295" x1="0" y1="187.393" x2="0" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1296" x1="62.942708333333336" y1="187.393" x2="62.942708333333336" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1297" x1="125.88541666666667" y1="187.393" x2="125.88541666666667" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1298" x1="188.828125" y1="187.393" x2="188.828125" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1299" x1="251.77083333333334" y1="187.393" x2="251.77083333333334" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1300" x1="314.7135416666667" y1="187.393" x2="314.7135416666667" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1301" x1="377.65625" y1="187.393" x2="377.65625" y2="193.393" stroke="#e0e0e0" stroke-dasharray="0" className="apexcharts-xaxis-tick"></line><line id="SvgjsLine1309" x1="0" y1="186.393" x2="377.65625" y2="186.393" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine1308" x1="0" y1="1" x2="0" y2="186.393" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG1249" className="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1250" className="apexcharts-series" ><path id="SvgjsPath1253" d="M 0 170.41645714285715L 62.94270833333333 122.48682857142859L 125.88541666666666 69.23168571428573L 188.828125 170.41645714285715L 251.77083333333331 31.95308571428572L 314.71354166666663 85.20822857142858L 377.65625 15.976542857142874" fill="none" fill-opacity="1" stroke="rgba(0,122,216,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0" className="apexcharts-line" index="0" clip-path="url(#gridRectMaskffwagrc5i)" pathTo="M 0 170.41645714285715L 62.94270833333333 122.48682857142859L 125.88541666666666 69.23168571428573L 188.828125 170.41645714285715L 251.77083333333331 31.95308571428572L 314.71354166666663 85.20822857142858L 377.65625 15.976542857142874" pathFrom="M -1 223.6716L -1 223.6716L 62.94270833333333 223.6716L 125.88541666666666 223.6716L 188.828125 223.6716L 251.77083333333331 223.6716L 314.71354166666663 223.6716L 377.65625 223.6716"></path><g id="SvgjsG1251" className="apexcharts-series-markers-wrap" data:realIndex="0"><g className="apexcharts-series-markers"><circle id="SvgjsCircle1315" r="0" cx="0" cy="0" className="apexcharts-marker wh75gg2xm no-pointer-events" stroke="#ffffff" fill="#04c1ff" fill-opacity="1" stroke-width="4" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1252" className="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1310" x1="0" y1="0" x2="377.65625" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1311" x1="0" y1="0" x2="377.65625" y2="0" stroke-dasharray="0" stroke-width="0" className="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1312" className="apexcharts-yaxis-annotations"></g><g id="SvgjsG1313" className="apexcharts-xaxis-annotations"></g><g id="SvgjsG1314" className="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1245" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1278" className="apexcharts-yaxis" rel="0" transform="translate(8.4375, 0)"><g id="SvgjsG1279" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1280" font-family="$open-sans" x="20" y="31.5" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1281">42</tspan></text><text id="SvgjsText1282" font-family="$open-sans" x="20" y="68.7786" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1283">35</tspan></text><text id="SvgjsText1284" font-family="$open-sans" x="20" y="106.0572" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1285">28</tspan></text><text id="SvgjsText1286" font-family="$open-sans" x="20" y="143.3358" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1287">21</tspan></text><text id="SvgjsText1288" font-family="$open-sans" x="20" y="180.6144" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1289">14</tspan></text><text id="SvgjsText1290" font-family="$open-sans" x="20" y="217.89299999999997" text-anchor="end" dominant-baseline="auto" font-size="10px" font-weight="700" fill="#b2b8e4" className="apexcharts-text apexcharts-yaxis-label "><tspan id="SvgjsTspan1291">7</tspan></text></g></g><g id="SvgjsG1242" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend" style="max-height: 125px;"></div><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px" }}></div><div className="apexcharts-tooltip-series-group" style="order: 1;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(0, 143, 251);"></span><div className="apexcharts-tooltip-text" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "12px" }}>
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-label"></span>
                                <span className="apexcharts-tooltip-text-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label"></span>
                                <span className="apexcharts-tooltip-text-z-value"></span></div>
                            </div>
                            </div>
                            </div>
                            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text"></div></div></div></div>
                          <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: "464px", height: "348px" }}></div></div><div className="contract-trigger"></div></div></div>*/}
                      </div> 
                    </div>
                  </div>
                  <div className="next_wrapper">
                    <div className="next_game d-sm-flex align-items-center justify-content-between">
                      <div className="left_game text-center text-sm-start">
                        <p className="titlee">Next Game Projections</p>
                        <p className="time">2/4, 7:30 PM GMT+6</p>
                      </div>
                      <div className="right_game text-center">
                        <a href="league.html">
                          <img src="assets/images/games/new_logo.png" alt="New York Team" />
                        </a>
                        <p>New York Knicks</p>
                      </div>
                    </div>
                    <div className="labels_wrapper">
                      <div className="row">
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">27.96</p>
                          <p className="name">Points</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">5.98</p>
                          <p className="name">Assists</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">5.61</p>
                          <p className="name">Rebounds</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">0.12</p>
                          <p className="name">Blocks</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">1.32</p>
                          <p className="name">Steals</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">32</p>
                          <p className="name">Minutes</p>
                        </div>
                        <div className="col-4 col-sm-3 col-md text-center">
                          <p className="number">43.56</p>
                          <p className="name">Ftps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="history_wrapper">
                    <h3>Game History</h3>
                    <div className="game_table_wrapper">
                      <div className="table_responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Opponent</th>
                              <th>Points</th>
                              <th>Assists</th>
                              <th>Rebounds</th>
                              <th>Blocks</th>
                              <th>Steals</th>
                              <th>Minutes</th>
                              <th>Fpts</th>
                              <th>Proj Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="teams">
                                <div className="d-flex align-items-center">
                                  <div className="club">
                                    <a href="league.html">
                                      <img src="assets/images/games/atlanta_logo.png" alt="Atlanta" />
                                    </a>
                                  </div>
                                  <div className="club_name">
                                    <p>DET</p>
                                  </div>
                                  <div className="date">
                                    <p>2/2/2021</p>
                                  </div>
                                </div>
                              </td>
                              <td>38</td>
                              <td>8</td>
                              <td>11</td>
                              <td>0</td>
                              <td>3</td>
                              <td>38</td>
                              <td>66.2</td>
                              <td>44.42</td>
                            </tr>
                            <tr>
                              <td className="teams">
                                <div className="d-flex align-items-center">
                                  <div className="club">
                                    <a href="league.html">
                                      <img src="assets/images/games/baltimore_logo.png" alt="Baltimore" />
                                    </a>
                                  </div>
                                  <div className="club_name">
                                    <p>MIN</p>
                                  </div>
                                  <div className="date">
                                    <p>2/2/2021</p>
                                  </div>
                                </div>
                              </td>
                              <td>38</td>
                              <td>8</td>
                              <td>11</td>
                              <td>0</td>
                              <td>3</td>
                              <td>38</td>
                              <td>66.2</td>
                              <td>44.42</td>
                            </tr>
                            <tr>
                              <td className="teams">
                                <div className="d-flex align-items-center">
                                  <div className="club">
                                    <a href="league.html">
                                      <img src="assets/images/games/browns_logo.png" alt="Browns" />
                                    </a>
                                  </div>
                                  <div className="club_name">
                                    <p>TOR</p>
                                  </div>
                                  <div className="date">
                                    <p>2/2/2021</p>
                                  </div>
                                </div>
                              </td>
                              <td>38</td>
                              <td>8</td>
                              <td>11</td>
                              <td>0</td>
                              <td>3</td>
                              <td>38</td>
                              <td>66.2</td>
                              <td>44.42</td>
                            </tr>
                            <tr>
                              <td className="teams">
                                <div className="d-flex align-items-center">
                                  <div className="club">
                                    <a href="league.html">
                                      <img src="assets/images/games/new_logo.png" alt="New York" />
                                    </a>
                                  </div>
                                  <div className="club_name">
                                    <p>POR</p>
                                  </div>
                                  <div className="date">
                                    <p>2/2/2021</p>
                                  </div>
                                </div>
                              </td>
                              <td>38</td>
                              <td>8</td>
                              <td>11</td>
                              <td>0</td>
                              <td>3</td>
                              <td>38</td>
                              <td>66.2</td>
                              <td>44.42</td>
                            </tr>
                            <tr>
                              <td className="teams">
                                <div className="d-flex align-items-center">
                                  <div className="club">
                                    <a href="league.html">
                                      <img src="assets/images/games/miami.png" alt="Miami" />
                                    </a>
                                  </div>
                                  <div className="club_name">
                                    <p>SAC</p>
                                  </div>
                                  <div className="date">
                                    <p>2/2/2021</p>
                                  </div>
                                </div>
                              </td>
                              <td>38</td>
                              <td>8</td>
                              <td>11</td>
                              <td>0</td>
                              <td>3</td>
                              <td>38</td>
                              <td>66.2</td>
                              <td>44.42</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="show_wrapper text-center">
                      <a href="#">View More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 d-flex flex-column">
                <div className="inner_right">
                  <div className="view_wrapper d-flex align-items-center justify-content-between">
                    <div className="text">
                      <h5>Upcoming Games</h5>
                    </div>
                    <div className="link">
                      <a href="league.html">VIEW ALL</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                      <div className="game_wrapper2">
                        <div className="game_header d-flex align-items-start justify-content-around">
                          <div className="left_col text-center">
                            <img src="assets/images/user/new_logo.png" alt="New York Team" />
                            <p>
                              <a href="league.html">New York Knicks</a>
                            </p>
                          </div>
                          <div className="middle_col d-flex align-items-start text-center">
                            <img src="assets/images/user/vs.png" alt="Versus" />
                          </div>
                          <div className="right_col text-center">
                            <img src="assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
                            <p>
                              <a href="league.html">Phoenix Suns</a>
                            </p>
                          </div>
                        </div>
                        <div className="game_footer d-flex align-items-center justify-content-around">
                          <p className="date">April 14, 2021</p>
                          <p className="time">02:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                      <div className="game_wrapper2">
                        <div className="game_header d-flex align-items-start justify-content-around">
                          <div className="left_col text-center">
                            <img src="assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                            <p>
                              <a href="league.html">Atlanta Hawks</a>
                            </p>
                          </div>
                          <div className="middle_col d-flex align-items-start text-center">
                            <img src="assets/images/user/vs.png" alt="Versus" />
                          </div>
                          <div className="right_col text-center">
                            <img src="assets/images/user/miami.png" alt="Miami Team" />
                            <p>
                              <a href="league.html">Miami Heat</a>
                            </p>
                          </div>
                        </div>
                        <div className="game_footer d-flex align-items-center justify-content-around">
                          <p className="date">April 14, 2021</p>
                          <p className="time">02:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                      <div className="game_wrapper2">
                        <div className="game_header d-flex align-items-start justify-content-around">
                          <div className="left_col text-center">
                            <img src="assets/images/user/browns_logo.png" alt="Browns Team" />
                            <p>
                              <a href="league.html">Cleveland Browns</a>
                            </p>
                          </div>
                          <div className="middle_col d-flex align-items-start text-center">
                            <img src="assets/images/user/vs.png" alt="Versus" />
                          </div>
                          <div className="right_col text-center">
                            <img src="assets/images/user/baltimore_logo.png" alt="Ravens Team" />
                            <p>
                              <a href="league.html">Baltimore Ravens</a>
                            </p>
                          </div>
                        </div>
                        <div className="game_footer d-flex align-items-center justify-content-around">
                          <p className="date">April 14, 2021</p>
                          <p className="time">02:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                      <div className="game_wrapper2">
                        <div className="game_header d-flex align-items-start justify-content-around">
                          <div className="left_col text-center">
                            <img src="assets/images/user/new_logo.png" alt="New York Team" />
                            <p>
                              <a href="league.html">New York Knicks</a>
                            </p>
                          </div>
                          <div className="middle_col d-flex align-items-start text-center">
                            <img src="assets/images/user/vs.png" alt="Versus" />
                          </div>
                          <div className="right_col text-center">
                            <img src="assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
                            <p>
                              <a href="league.html">Phoenix Suns</a>
                            </p>
                          </div>
                        </div>
                        <div className="game_footer d-flex align-items-center justify-content-around">
                          <p className="date">April 14, 2021</p>
                          <p className="time">02:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                      <div className="game_wrapper2">
                        <div className="game_header d-flex align-items-start justify-content-around">
                          <div className="left_col text-center">
                            <img src="assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                            <p>
                              <a href="league.html">Atlanta Hawks</a>
                            </p>
                          </div>
                          <div className="middle_col d-flex align-items-start text-center">
                            <img src="assets/images/user/vs.png" alt="Versus" />
                          </div>
                          <div className="right_col text-center">
                            <img src="assets/images/user/miami.png" alt="Miami Team" />
                            <p>
                              <a href="league.html">Miami Heat</a>
                            </p>
                          </div>
                        </div>
                        <div className="game_footer d-flex align-items-center justify-content-around">
                          <p className="date">April 14, 2021</p>
                          <p className="time">02:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                      <div className="game_wrapper2">
                        <div className="game_header d-flex align-items-start justify-content-around">
                          <div className="left_col text-center">
                            <img src="assets/images/user/browns_logo.png" alt="Browns Team" />
                            <p>
                              <a href="league.html">Cleveland Browns</a>
                            </p>
                          </div>
                          <div className="middle_col d-flex align-items-start text-center">
                            <img src="assets/images/user/vs.png" alt="Versus" />
                          </div>
                          <div className="right_col text-center">
                            <img src="assets/images/user/baltimore_logo.png" alt="Ravens Team" />
                            <p>
                              <a href="league.html">Baltimore Ravens</a>
                            </p>
                          </div>
                        </div>
                        <div className="game_footer d-flex align-items-center justify-content-around">
                          <p className="date">April 14, 2021</p>
                          <p className="time">02:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-9">
                <footer className="user_footer">
                  <div className="container-fluid p-0">
                    <div className="row footer_nav d-flex align-items-center">
                      <div className="col-lg-7">
                        <ul className="nav justify-content-center justify-content-sm-start">
                          <li className="nav-item">
                            <a className="nav-link ml-0" href="contact.html">CONTACT US</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">TERMS OF USE</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">PRIVACY POLICY</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-5">
                        <ul className="nav justify-content-center justify-content-sm-start justify-content-lg-end">
                          <li className="nav-item">
                            <a className="nav-link ml-0" href="#">
                              <img src="assets/images/footer/apple_store.png" alt="Download from Apple Store" />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link mr-0" href="#">
                              <img src="assets/images/footer/google_store.png" alt="Download from Google Play Store" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="row footer_copyright d-flex align-items-center">
                      <div className="col-lg-7 text-center text-sm-start">
                        <p className="para">Copyright © 2021. Made with passion by <a href="https://themeforest.net/user/pixelaxis/portfolio">Pixelaxis</a></p>
                      </div>
                      <div className="col-lg-5 text-center text-sm-start text-lg-end">
                        <p className="para">All rights reserved</p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          {/*<!--main content-->*/}
        </div>
        {/*<!--body content-->*/}
      </div>
      {/*<!--page wrapper end-->*/}

      {/*<!--jquery-3.6.0 minified source-->*/}
      <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
      {/*<!--bootstrap 5 minified bundle js source-->*/}
      <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
      {/*<!--owl carousel-2.3.4 minified js source-->*/}
      <script src="assets/js/vendor/owl.carousel.min.js"></script>
      {/*<!--jquery waypoints minified source-->*/}
      <script src="assets/js/vendor/jquery.waypoints.min.js"></script>
      {/*<!--magnific popup-1.1.0 minified source-->*/}
      <script src="assets/js/vendor/jquery.magnific-popup.min.js"></script>
      {/*<!--counter up-1.0.0 minified js source-->*/}
      <script src="assets/js/vendor/jquery.counterup.min.js"></script>
      {/*<!--jquery nice select minified source-->*/}
      <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
      {/*<!--apexs chart minified js source-->*/}
      <script src="assets/js/vendor/apexcharts.min.js"></script>
      {/*<!--apex chart customization js source-->*/}
      <script src="assets/js/vendor/apex-customization.js"></script>
      {/*<!--wow animation js source-->*/}
      <script src="assets/js/vendor/wow.min.js"></script>
      {/*<!--custom js source-->*/}
      <script src="assets/js/main.js"></script>

      <svg id="SvgjsSvg1155" width="2" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ overflow: "hidden", top: "-100%", left: "-100%", position: "absolute", opacity: 0 }}><defs id="SvgjsDefs1156"></defs><polyline id="SvgjsPolyline1157" points="0,0"></polyline><path id="SvgjsPath1158" d="M0 0 "></path></svg><iframe id="1W0BW2PX" src="chrome-extension://ekhagklcjbdpajgpjgmbionohlpdbjgc/translateSandbox/translateSandbox.html" frameBorder="0" style={{ width: 0, height: 0 }}></iframe>
    </div>
    </div>
  );
}
