import Tag from "@/components/Tag";
export default function Item() {
  return (
    <div className="player_info_wrapper">
      <div className="row player_info_row d-flex align-items-center justify-content-between">
        <div className="col-md-5 col-lg-4 col-xl-4">
          <div className="player_info d-flex align-items-center justify-content-start">
            <div className="player_img">
              <a
                href="player-profile.html"
                className="d-flex align-items-end justify-content-center"
              >
                <img
                  src="assets/images/player_search/avatar_1.png"
                  alt="Player One"
                />
              </a>
            </div>
            <div className="player_name">
              <a href="player-profile.html">Luguentz Dort</a>
              <p>Oklahoma City Thunder</p>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5">
          <div className="player_price d-flex align-items-center justify-content-start justify-content-md-center">
            <Tag type="red" text="Base" />
            <div className="price">
              <p>
                <i className="fas fa-dollar-sign"></i> 3.91
              </p>
              <p>
                +8.12 <i className="fas fa-caret-up"></i>
              </p>
            </div>
            <div className="value_chart">
              <img
                src="assets/images/player_search/chart_1.png"
                alt="Chart One"
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-3 col-xl-3">
          <div className="player_buy_sell d-flex  align-items-center justify-content-start justify-content-lg-center">
            <div className="btn_wrapper">
              <a href="trade.html" className="btn btn-primary sell">
                SELL
              </a>
              <a href="trade.html" className="btn btn-primary buy">
                BUY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
