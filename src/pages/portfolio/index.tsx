import { useEffect } from "react";
const Docspage = () => {
  return (
    <div className="container-fluid main_content">
      <div className="row d-flex flex-wrap">
        <div className="col-xl-9 d-flex flex-column">
          <div className="inner_left">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="value_wrapper cmn_st">
                    <div className="d-flex align-items-center justify-content-between title_wrapper">
                      <p className="title">pORTFOLIO VALUE</p>
                      <p className="value d-flex align-items-center">
                        {" "}
                        <i className="fas fa-plus"></i>
                        09.84%{" "}
                        <img src="assets/images/user/arrow.png" alt="Arrow" />
                      </p>
                    </div>
                    <h5>
                      {" "}
                      <i className="	fas fa-dollar-sign"></i> 1500.00
                    </h5>
                    <div className="chart_wrapper d-flex justify-content-end">
                      <div id="valueChart"></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="balance cmn_st">
                    <div className="d-flex align-items-center justify-content-between title_wrapper">
                      <p className="title">ACCOUNT BALANCE</p>
                      <p className="value d-flex align-items-center">
                        {" "}
                        <i className="fas fa-plus"></i>
                        09.84%{" "}
                        <img src="assets/images/user/arrow.png" alt="Arrow" />
                      </p>
                    </div>
                    <h5>
                      {" "}
                      <i className="	fas fa-dollar-sign"></i> 500.00
                    </h5>
                    <div className="chart_wrapper d-flex justify-content-end">
                      <div id="balanceChart"></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="earnings cmn_st">
                    <div className="d-flex align-items-center justify-content-between title_wrapper">
                      <p className="title">EARNINGS</p>
                      <p className="value d-flex align-items-center">
                        {" "}
                        <i className="fas fa-plus"></i>
                        09.84%{" "}
                        <img src="assets/images/user/arrow.png" alt="Arrow" />
                      </p>
                    </div>
                    <h5>
                      {" "}
                      <i className="	fas fa-dollar-sign"></i> 450.00
                    </h5>
                    <div className="chart_wrapper d-flex justify-content-end">
                      <div id="earningsChart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table_content_wrapper">
              <h5>My players</h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">players</th>
                      <th scope="col">Change</th>
                      <th scope="col">Share price</th>
                      <th scope="col">Bought At</th>
                      <th scope="col">My Share</th>
                      <th scope="col">Earning</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="player_info">
                        <div className="wrapper d-flex align-items-center">
                          <div className="img_wrapper">
                            <a
                              href="player-profile.html"
                              className="d-inline-flex align-items-end justify-content-center"
                            >
                              <img
                                src="assets/images/user/avatar_1.png"
                                alt="player One"
                              />
                            </a>
                            <span className="league">NBA</span>
                          </div>
                          <div className="info_wrapper">
                            <a href="player-profile.html">Jessie Berry</a>
                            <p>Oklahoma City Thunder</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="change d-flex align-items-center">
                          {" "}
                          <i className="fas fa-plus"></i>
                          8.12% <i className="fas fa-caret-down"></i>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          <i className="fas fa-dollar-sign"></i> 3.91
                        </p>
                      </td>
                      <td>
                        <p className="bought">
                          <i className="fas fa-dollar-sign"></i> 3.00
                        </p>
                      </td>
                      <td>
                        <p className="share">9</p>
                      </td>
                      <td>
                        <p className="earning d-flex align-items-center">
                          <i className="fas fa-dollar-sign"></i>8.19
                        </p>
                      </td>
                      <td>
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          SELL
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="player_info">
                        <div className="wrapper d-flex align-items-center">
                          <div className="img_wrapper">
                            <a
                              href="player-profile.html"
                              className="d-inline-flex align-items-end justify-content-center"
                            >
                              <img
                                src="assets/images/user/avatar_1.png"
                                alt="player One"
                              />
                            </a>
                            <span className="league">NBA</span>
                          </div>
                          <div className="info_wrapper">
                            <a href="player-profile.html">Jessie Berry</a>
                            <p>Oklahoma City Thunder</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="change d-flex align-items-center">
                          {" "}
                          <i className="fas fa-plus"></i>
                          8.12% <i className="fas fa-caret-down"></i>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          <i className="fas fa-dollar-sign"></i> 3.91
                        </p>
                      </td>
                      <td>
                        <p className="bought">
                          <i className="fas fa-dollar-sign"></i> 3.00
                        </p>
                      </td>
                      <td>
                        <p className="share">9</p>
                      </td>
                      <td>
                        <p className="earning d-flex align-items-center">
                          <i className="fas fa-dollar-sign"></i>8.19
                        </p>
                      </td>
                      <td>
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          SELL
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="player_info">
                        <div className="wrapper d-flex align-items-center">
                          <div className="img_wrapper">
                            <a
                              href="player-profile.html"
                              className="d-inline-flex align-items-end justify-content-center"
                            >
                              <img
                                src="assets/images/user/avatar_1.png"
                                alt="player One"
                              />
                            </a>
                            <span className="league">NBA</span>
                          </div>
                          <div className="info_wrapper">
                            <a href="player-profile.html">Jessie Berry</a>
                            <p>Oklahoma City Thunder</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="change d-flex align-items-center">
                          {" "}
                          <i className="fas fa-plus"></i>
                          8.12% <i className="fas fa-caret-down"></i>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          <i className="fas fa-dollar-sign"></i> 3.91
                        </p>
                      </td>
                      <td>
                        <p className="bought">
                          <i className="fas fa-dollar-sign"></i> 3.00
                        </p>
                      </td>
                      <td>
                        <p className="share">9</p>
                      </td>
                      <td>
                        <p className="earning d-flex align-items-center">
                          <i className="fas fa-dollar-sign"></i>8.19
                        </p>
                      </td>
                      <td>
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          SELL
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="player_info">
                        <div className="wrapper d-flex align-items-center">
                          <div className="img_wrapper">
                            <a
                              href="player-profile.html"
                              className="d-inline-flex align-items-end justify-content-center"
                            >
                              <img
                                src="assets/images/user/avatar_1.png"
                                alt="player One"
                              />
                            </a>
                            <span className="league">NBA</span>
                          </div>
                          <div className="info_wrapper">
                            <a href="player-profile.html">Jessie Berry</a>
                            <p>Oklahoma City Thunder</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="change d-flex align-items-center">
                          {" "}
                          <i className="fas fa-plus"></i>
                          8.12% <i className="fas fa-caret-down"></i>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          <i className="fas fa-dollar-sign"></i> 3.91
                        </p>
                      </td>
                      <td>
                        <p className="bought">
                          <i className="fas fa-dollar-sign"></i> 3.00
                        </p>
                      </td>
                      <td>
                        <p className="share">9</p>
                      </td>
                      <td>
                        <p className="earning d-flex align-items-center">
                          <i className="fas fa-dollar-sign"></i>8.19
                        </p>
                      </td>
                      <td>
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          SELL
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h5 className="watchTitle">Watchlist</h5>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">players</th>
                      <th scope="col">Change</th>
                      <th scope="col">Share price</th>
                      <th scope="col">Team</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="player_info">
                        <div className="wrapper d-flex align-items-center">
                          <div className="img_wrapper">
                            <a
                              href="player-profile.html"
                              className="d-inline-flex align-items-end justify-content-center"
                            >
                              <img
                                src="assets/images/user/avatar_1.png"
                                alt="player One"
                              />
                            </a>
                            <span className="league">NBA</span>
                          </div>
                          <div className="info_wrapper">
                            <a href="player-profile.html">Jessie Berry</a>
                            <p>Oklahoma City Thunder</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="change d-flex align-items-center">
                          {" "}
                          <i className="fas fa-plus"></i>
                          8.12% <i className="fas fa-caret-down"></i>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          <i className="fas fa-dollar-sign"></i> 3.91
                        </p>
                      </td>
                      <td>
                        <p className="price">Warriors</p>
                      </td>
                      <td className="buy_sell">
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          SELL
                        </a>
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          BUY
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="player_info">
                        <div className="wrapper d-flex align-items-center">
                          <div className="img_wrapper">
                            <a
                              href="player-profile.html"
                              className="d-inline-flex align-items-end justify-content-center"
                            >
                              <img
                                src="assets/images/user/avatar_1.png"
                                alt="player One"
                              />
                            </a>
                            <span className="league">NBA</span>
                          </div>
                          <div className="info_wrapper">
                            <a href="player-profile.html">Jessie Berry</a>
                            <p>Oklahoma City Thunder</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="change d-flex align-items-center">
                          {" "}
                          <i className="fas fa-plus"></i>
                          8.12% <i className="fas fa-caret-down"></i>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          <i className="fas fa-dollar-sign"></i> 3.91
                        </p>
                      </td>
                      <td>
                        <p className="price">Warriors</p>
                      </td>
                      <td className="buy_sell">
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          SELL
                        </a>
                        <a
                          href="trade.html"
                          className="btn btn-primary sell_btn"
                        >
                          BUY
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                      <img
                        src="assets/images/user/new_logo.png"
                        alt="New York Team"
                      />
                      <p>
                        <a href="league.html">New York Knicks</a>
                      </p>
                    </div>
                    <div className="middle_col d-flex align-items-start text-center">
                      <img src="assets/images/user/vs.png" alt="Versus" />
                    </div>
                    <div className="right_col text-center">
                      <img
                        src="assets/images/user/phoenix_logo.png"
                        alt="phoenix Team"
                      />
                      <p>
                        <a href="league.html">phoenix Suns</a>
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
                      <img
                        src="assets/images/user/atlanta_logo.png"
                        alt="Atlanta Team"
                      />
                      <p>
                        <a href="league.html">Atlanta Hawks</a>
                      </p>
                    </div>
                    <div className="middle_col d-flex align-items-start text-center">
                      <img src="assets/images/user/vs.png" alt="Versus" />
                    </div>
                    <div className="right_col text-center">
                      <img
                        src="assets/images/user/miami.png"
                        alt="Miami Team"
                      />
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
                      <img
                        src="assets/images/user/browns_logo.png"
                        alt="Browns Team"
                      />
                      <p>
                        <a href="league.html">Cleveland Browns</a>
                      </p>
                    </div>
                    <div className="middle_col d-flex align-items-start text-center">
                      <img src="assets/images/user/vs.png" alt="Versus" />
                    </div>
                    <div className="right_col text-center">
                      <img
                        src="assets/images/user/baltimore_logo.png"
                        alt="Ravens Team"
                      />
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
                      <img
                        src="assets/images/user/new_logo.png"
                        alt="New York Team"
                      />
                      <p>
                        <a href="league.html">New York Knicks</a>
                      </p>
                    </div>
                    <div className="middle_col d-flex align-items-start text-center">
                      <img src="assets/images/user/vs.png" alt="Versus" />
                    </div>
                    <div className="right_col text-center">
                      <img
                        src="assets/images/user/phoenix_logo.png"
                        alt="phoenix Team"
                      />
                      <p>
                        <a href="league.html">phoenix Suns</a>
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
                      <img
                        src="assets/images/user/atlanta_logo.png"
                        alt="Atlanta Team"
                      />
                      <p>
                        <a href="league.html">Atlanta Hawks</a>
                      </p>
                    </div>
                    <div className="middle_col d-flex align-items-start text-center">
                      <img src="assets/images/user/vs.png" alt="Versus" />
                    </div>
                    <div className="right_col text-center">
                      <img
                        src="assets/images/user/miami.png"
                        alt="Miami Team"
                      />
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
                      <img
                        src="assets/images/user/browns_logo.png"
                        alt="Browns Team"
                      />
                      <p>
                        <a href="league.html">Cleveland Browns</a>
                      </p>
                    </div>
                    <div className="middle_col d-flex align-items-start text-center">
                      <img src="assets/images/user/vs.png" alt="Versus" />
                    </div>
                    <div className="right_col text-center">
                      <img
                        src="assets/images/user/baltimore_logo.png"
                        alt="Ravens Team"
                      />
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
                      <a className="nav-link ml-0" href="contact.html">
                        CONTACT US
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        TERMS OF USE
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        pRIVACY pOLICY
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <ul className="nav justify-content-center justify-content-sm-start justify-content-lg-end">
                    <li className="nav-item">
                      <a className="nav-link ml-0" href="#">
                        <img
                          src="assets/images/footer/apple_store.png"
                          alt="Download from Apple Store"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mr-0" href="#">
                        <img
                          src="assets/images/footer/google_store.png"
                          alt="Download from Google play Store"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="row footer_copyright d-flex align-items-center">
                <div className="col-lg-7 text-center text-sm-start">
                  <p className="para">
                    Copyright &#169; 2021. Made with passion by{" "}
                    <a href="https://themeforest.net/user/Bold Exchange/portfolio">
                      Bold Exchange
                    </a>
                  </p>
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
  );
};

export default Docspage;
