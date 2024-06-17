

export default function MainContext() {
  return (
    <section className="home_banner_wrapper">
        <div className="container">
            <div className="row home_banner_row d-flex align-items-center">
                <div className="col-lg-5">
                    <div className="inner">
                        <h1 className="hero_title">The New Way to Invest in Sports</h1>
                        <p className="section_info">Best fantasy sports stock exchange where users can buy/sell shares of professional athletes as if they
                        were stocks.</p>
                        <div className="btn_wrapper d-flex align-items-center">
                            <div className="trade_btn">
                                <a href="trade.html" className="btn btn-primary">Start Trading</a>
                            </div>
                            <div className="video_btn">
                                <a className="video_popup" href="https://www.youtube.com/watch?v=uCik8-i2Hcc" title="YouTube video player">
                                    <i className="flaticon-play-arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="inner text-center">
                        <img src="assets/images/home_banner/players.png" alt="Home Banner Illustration"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
