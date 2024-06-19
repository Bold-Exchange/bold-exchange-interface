import { useEffect } from "react";
export default function HomePage() {
  useEffect(() => {
    (function ($) {
      "use strict";

      $(document).ready(function () {
        //codes for wow animation
        if ($(".wow").length) {
          var wow = new WOW({
            boxClass: "wow",
            // animated element css class (default is wow)
            animateClass: "animated",
            // animation css class (default is animated)
            offset: 0,
            // distance to the element when triggering the animation (default is 0)
            mobile: false,
            // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }

        //hambarger menu icon toggle
        $("#toggleIcon").click(function () {
          $(this).toggleClass("active");
        });

        $("#cog").click(function () {
          $(".theme-option").toggleClass("theme-active");
        });

        var otheme = $(".out-theme");
        $(otheme).on("click", function () {
          $(otheme).removeClass("oactive");
          $(this).addClass("oactive");
        });

        //codes for log in and sign up button styles in navbar
        var exchange = $(".registration");
        $(exchange).on("mouseover", function () {
          $(exchange).removeClass("hover");
          $(this).addClass("hover");
        });

        //codes for second home nav background change on scroll
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll > 30) {
            if ($("body").hasClass("dark")) {
              $(".navbar_two").css("background", "#fff");
            } else {
              $(".navbar_two").css("background", "#25294a");
            }
            $(".navbar").css("box-shadow", "0px 2px 2px -2px #25294a");
          } else {
            $(".navbar_two").css("background", "transparent");
            $(".navbar").css("box-shadow", "0px 0px 0px 0px transparent");
          }
        });

        //codes for video popup
        $(".video_popup").magnificPopup({
          type: "iframe",
          // other options
          iframe: {
            markup:
              '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              "</div>",

            patterns: {
              youtube: {
                index: "youtube.com/",

                id: "v=",

                src: "https://www.youtube.com/embed/%id%",
              },
            },

            srcAction: "iframe_src",
          },
        });

        //home carousel codes
        $(".slider_row").owlCarousel({
          rtl: false,
          loop: true,
          margin: 10,
          nav: true,
          navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>",
          ],
          dots: false,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        });

        //game carousel codes
        $(".game_slider_row").owlCarousel({
          rtl: false,
          loop: true,
          margin: 10,
          nav: true,
          navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>",
          ],
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        });

        //about counter up codes
        $(".counter").counterUp({
          delay: 10,
          time: 1000,
        });

        //codes for video popup
        $(".video_popup").magnificPopup({
          type: "iframe",
          // other options
          iframe: {
            markup:
              '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              "</div>",
            patterns: {
              youtube: {
                index: "youtube.com/",
                id: "v=",
                src: "https://www.youtube.com/embed/%id%",
              },
            },
            srcAction: "iframe_src",
          },
        });

        //password show hide on form field
        $(".toggle-password").click(function () {
          var x = document.getElementById("password-field");
          if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
        });

        //bottom to top scroll
        var ScrollTop = $(".scrollToTop");
        $(window).on("scroll", function () {
          if ($(this).scrollTop() < 500) {
            ScrollTop.removeClass("active");
          } else {
            ScrollTop.addClass("active");
          }
        });
        $(".scrollToTop").on("click", function () {
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            500
          );
          return false;
        });

        //codes for sidnav
        $("#click").on("click", function () {
          $(".sidebar").toggleClass("sidebar_active");
          $(".body_content").toggleClass("body_active");
        });

        //hambarger menu icon toggle
        $("#click").click(function () {
          $(this).toggleClass("hambarger_toggle");
          $(".top_bar_wrapper").toggleClass("collapse_margin");
          $(".search_bar").toggleClass("search_collapse");
          $(".inner_left").toggleClass("inner_active");
          $(".col-xl-3").toggleClass("side_collapse_padding");
          $(".user_footer").toggleClass("footer_collapse");
        });

        //codes for close sidnav
        $(".close_sidenav").on("click", function () {
          $(".sidebar").toggleClass("sidebar_active");
          $("#click").toggleClass("hambarger_toggle");
        });

        //codes for language select
        $("#language").niceSelect();

        //codes for profile options
        $(".profile_link").on("click", function () {
          $(".drop_content").toggleClass("user_link");
        });

        //codes for small searh bar
        $(".search_toggle").on("click", function () {
          $("#forSm").toggleClass("show_search");
        });

        //codes for user profile tabs
        $(".tab_btn").click(function () {
          var tab_id = $(this).attr("data-tab");

          $(".tab_btn").removeClass("active");
          $(".profile_tab").removeClass("active");

          $(this).addClass("active");
          $("#" + tab_id).addClass("active");
        });

        //code followers
        $(".f_drop").hover(function () {
          $(".f_con").toggle();
        });

        //codes for log in and sign up button styles in navbar
        var chartExchange = $(".chartHover");
        $(chartExchange).on("mouseover", function () {
          $(chartExchange).removeClass("active");
          $(this).addClass("active");
        });

        //codes for Players search tabs
        $(".tab_btnp").click(function () {
          var tab_idp = $(this).attr("data-tab");

          $(".tab_btnp").removeClass("activ");
          $(".player_search_tabs").removeClass("activ");

          $(this).addClass("activ");
          $("#" + tab_idp).addClass("activ");
        });

        //codes for trade tabs
        $(".trd_tab").click(function () {
          var trd_id = $(this).attr("data-tab");

          $(".trd_tab").removeClass("activeb");
          $(".trade_tab").removeClass("activet");

          $(this).addClass("activeb");
          $("#" + trd_id).addClass("activet");
        });

        //codes for faq tabs
        $(".rul_btn").click(function () {
          var rul_is = $(this).attr("data-tab");

          $(".rul_btn").removeClass("activer");
          $(".rul_tab").removeClass("activecr");

          $(this).addClass("activer");
          $("#" + rul_is).addClass("activecr");
        });

        //codes for theme switcher
        var switchTheme = $(".switcher");
        $(switchTheme).on("click", function () {
          $(switchTheme).removeClass("actives");
          $(this).addClass("actives");
        });

        // codes for theme color change
        $("#light").on("click", function () {
          window.localStorage.setItem("dark-theme", $("body").addClass("dark"));
          $("#logo").attr("src", "assets/images/logo-dark-n.png");
          $("img[src='assets/images/user/vs.png']").attr(
            "src",
            "assets/images/user/ac-vs.png"
          );
          $("img[src='assets/images/profile/referral.png']").attr(
            "src",
            "assets/images/profile/ac-ref.png"
          );
          $("img[src='assets/images/profile/last_month.png']").attr(
            "src",
            "assets/images/profile/ac-last.png"
          );
        });
        if (localStorage.getItem("dark-theme")) {
          $("body").addClass("dark");
          $("#light").addClass("actives");
          $(".th-t").removeClass("oactive");
          $(".th-o").addClass("oactive");
          $("#logo").attr("src", "assets/images/Bold_Logo-color.svg");
          $("img[src='assets/images/user/vs.png']").attr(
            "src",
            "assets/images/user/ac-vs.png"
          );
          $("img[src='assets/images/profile/referral.png']").attr(
            "src",
            "assets/images/profile/ac-ref.png"
          );
          $("img[src='assets/images/profile/last_month.png']").attr(
            "src",
            "assets/images/profile/ac-last.png"
          );
        } else {
          $("#dark").addClass("actives");
          $(".th-o").removeClass("oactive");
          $(".th-t").addClass("oactive");
          $("#logo").attr("src", "assets/images/Bold_Logo-color.svg");
          $("img[src='assets/images/user/ac-vs.png']").attr(
            "src",
            "assets/images/user/vs.png"
          );
          $("img[src='assets/images/profile/ac-ref.png']").attr(
            "src",
            "assets/images/profile/referral.png"
          );
          $("img[src='assets/images/profile/ac-last.png']").attr(
            "src",
            "assets/images/profile/last_month.png"
          );
        }

        $("#dark").on("click", function () {
          $("body").removeClass("dark");
          localStorage.removeItem("dark-theme");
          $("#dark").addClass("actives");
          $("#logo").attr("src", "assets/images/logo.png");
          $("img[src='assets/images/user/ac-vs.png']").attr(
            "src",
            "assets/images/user/vs.png"
          );
          $("img[src='assets/images/profile/ac-ref.png']").attr(
            "src",
            "assets/images/profile/referral.png"
          );
          $("img[src='assets/images/profile/ac-last.png']").attr(
            "src",
            "assets/images/profile/last_month.png"
          );
        });
      });
    })(jQuery);
  });
  return (
    <>
      <section className="home_two_banner_wrapper">
        <div className="container">
          <div className="row home_banner_row d-flex align-items-center">
            <div className="col-lg-5 col-xl-6">
              <div className="inner">
                <h1 className="hero_title">Invest of Your Favourite Players</h1>
                <p className="section_info">
                  Best fantasy sports stock exchange where users can buy/sell
                  shares of professional athletes as if they were stocks.
                </p>
                <div className="btn_wrapper d-flex align-items-center">
                  <div className="trade_btn">
                    <a href="/#/trade" className="btn btn-primary">
                      Start Trading
                    </a>
                  </div>
                  <div className="video_btn">
                    <a
                      href="https://www.youtube.com/watch?v=uCik8-i2Hcc"
                      title="YouTube video player"
                      className="video_popup"
                    >
                      <i className="flaticon-play-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="inner text-center">
                <img
                  src="assets/images/home_banner/home_two_banner_illustration.png"
                  alt="Home Banner Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="theme-option">
        <a href="javascript:void(0)" id="light" className="out-theme th-o">
          Light
        </a>
        <a
          href="javascript:void(0)"
          id="dark"
          className="out-theme th-t oactive"
        >
          Dark
        </a>
        <a
          href="javascript:void(0)"
          id="cog"
          className="d-flex align-items-center justify-content-center"
        >
          <i className="fas fa-cog fa-spin"></i>
        </a>
      </div>

      <section className="player_search_wrapper">
        <div className="container">
          <div className="input_search_wrapper">
            <form action="#" method="post">
              <input
                type="text"
                className="form-control"
                aria-describedby="search"
                name="search"
                id="search"
                required
                placeholder="Search Players"
              />
              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="fab fa-sistrix"></i> Search
              </button>
            </form>
          </div>
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
                  <div className="club_name">
                    <span className="nba">NBA</span>
                  </div>
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
                        src="assets/images/player_search/avatar_2.png"
                        alt="Player Two"
                      />
                    </a>
                  </div>
                  <div className="player_name">
                    <a href="player-profile.html">Naji Marshall</a>
                    <p>New Orleans Pelicans</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5">
                <div className="player_price d-flex align-items-center justify-content-start justify-content-md-center">
                  <div className="club_name">
                    <span className="nfl">NFL</span>
                  </div>
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
                      src="assets/images/player_search/chart_2.png"
                      alt="Chart Two"
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
                        src="assets/images/player_search/avatar_3.png"
                        alt="Player Three"
                      />
                    </a>
                  </div>
                  <div className="player_name">
                    <a href="player-profile.html">Adam Thielen</a>
                    <p>Minnesota Vikings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5">
                <div className="player_price d-flex align-items-center justify-content-start justify-content-md-center">
                  <div className="club_name">
                    <span className="mlb">MLB</span>
                  </div>
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
                      src="assets/images/player_search/chart_3.png"
                      alt="Chart Three"
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
                        src="assets/images/player_search/avatar_4.png"
                        alt="Player Four"
                      />
                    </a>
                  </div>
                  <div className="player_name">
                    <a href="player-profile.html">Noah Fant</a>
                    <p>Denver Broncos</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5">
                <div className="player_price d-flex align-items-center justify-content-start justify-content-md-center">
                  <div className="club_name">
                    <span className="nhl">NHL</span>
                  </div>
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
                      src="assets/images/player_search/chart_4.png"
                      alt="Chart Four"
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
                        src="assets/images/player_search/avatar_5.png"
                        alt="Player Five"
                      />
                    </a>
                  </div>
                  <div className="player_name">
                    <a href="player-profile.html">Russell Gage</a>
                    <p>Atlanta Falcons</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5">
                <div className="player_price d-flex align-items-center justify-content-start justify-content-md-center">
                  <div className="club_name">
                    <span className="nba">NBA</span>
                  </div>
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
                      src="assets/images/player_search/chart_5.png"
                      alt="Chart Five"
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
                        src="assets/images/player_search/avatar_6.png"
                        alt="Player Six"
                      />
                    </a>
                  </div>
                  <div className="player_name">
                    <a href="player-profile.html">Don Doyle</a>
                    <p>Los Angeles Lakers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5">
                <div className="player_price d-flex align-items-center justify-content-start justify-content-md-center">
                  <div className="club_name">
                    <span className="nfl">NFL</span>
                  </div>
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
                      src="assets/images/player_search/chart_6.png"
                      alt="Chart Six"
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
        </div>
      </section>

      <section className="work_section third_work">
        <div className="container">
          <div className="work_wrapper text-center">
            <h1 className="section_title">How does it work?</h1>
            <p className="section_info">
              It's easier than you think. Follow 3 simple easy steps
            </p>
          </div>
          <div className="row work_row d-flex align-items-center">
            <div className="col-md-6 col-lg-4">
              <div className="inner text-center">
                <div className="content_wrapper d-flex align-items-center justify-content-center">
                  <div className="content d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/work/deposit.png"
                      alt="Deposit Funds"
                    />
                  </div>
                </div>
                <h4 className="secondary">Deposit Funds</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="inner text-center">
                <div className="content_wrapper arrow_container d-flex align-items-center justify-content-center">
                  <div className="content d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/work/market.png"
                      alt="Watch the market"
                    />
                  </div>
                </div>
                <h4 className="secondary">Watch the market</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="inner text-center">
                <div className="content_wrapper d-flex align-items-center justify-content-center">
                  <div className="content d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/work/trade.png"
                      alt="Make a Trade"
                    />
                  </div>
                </div>
                <h4 className="secondary">Make a trade</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="game_wrapper">
        <div className="container">
          <div className="title_wrapper d-md-flex align-items-center d-block justify-content-between">
            <h1 className="section_title">Upcoming Games</h1>
            <a href="signup.html">
              View More <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
          <div className="game_slider_row owl-carousel owl-theme">
            <div className="slider_items">
              <div className="inner">
                <div className="slider_body d-flex align-items-start justify-content-evenly justify-content-sm-around">
                  <div className="left_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/new_logo.png"
                        alt="New York Logo"
                      />
                    </a>
                    <p>
                      <a href="league.html">New York Knicks</a>
                    </p>
                  </div>
                  <div className="mid_col d-flex align-items-center justify-content-center">
                    <img src="assets/images/games/vs.png" alt="Versus" />
                  </div>
                  <div className="right_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/phoenix_logo.png"
                        alt="Phoenix Logo"
                      />
                    </a>
                    <p>
                      <a href="league.html">Phoenix Suns</a>
                    </p>
                  </div>
                </div>
                <div className="slider_footer d-flex align-items-center justify-content-between">
                  <p>April 14, 2021</p>
                  <p>02:00 AM</p>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="inner">
                <div className="slider_body d-flex align-items-start justify-content-evenly justify-content-sm-around">
                  <div className="left_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/atlanta_logo.png"
                        alt="Atlanta Hawks"
                      />
                    </a>
                    <p>
                      <a href="league.html">Atlanta Hawks</a>
                    </p>
                  </div>
                  <div className="mid_col d-flex align-items-center justify-content-center">
                    <img src="assets/images/games/vs.png" alt="Versus" />
                  </div>
                  <div className="right_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/miami.png"
                        alt="Miami Heat"
                      />
                    </a>
                    <p>
                      <a href="league.html">Miami Heat</a>
                    </p>
                  </div>
                </div>
                <div className="slider_footer d-flex align-items-center justify-content-between">
                  <p>April 14, 2021</p>
                  <p>02:00 AM</p>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="inner">
                <div className="slider_body d-flex align-items-start justify-content-evenly justify-content-sm-around">
                  <div className="left_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/browns_logo.png"
                        alt="Cleveland Browns"
                      />
                    </a>
                    <p>
                      <a href="league.html">Cleveland Browns</a>
                    </p>
                  </div>
                  <div className="mid_col d-flex align-items-center justify-content-center">
                    <img src="assets/images/games/vs.png" alt="Versus" />
                  </div>
                  <div className="right_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/baltimore_logo.png"
                        alt="Baltimore Logo"
                      />
                    </a>
                    <p>
                      <a href="league.html">Baltimore Ravens</a>
                    </p>
                  </div>
                </div>
                <div className="slider_footer d-flex align-items-center justify-content-between">
                  <p>April 14, 2021</p>
                  <p>02:00 AM</p>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="inner">
                <div className="slider_body d-flex align-items-start justify-content-evenly justify-content-sm-around">
                  <div className="left_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/new_logo.png"
                        alt="New York Logo"
                      />
                    </a>
                    <p>
                      <a href="league.html">New York Knicks</a>
                    </p>
                  </div>
                  <div className="mid_col d-flex align-items-center justify-content-center">
                    <img src="assets/images/games/vs.png" alt="Versus" />
                  </div>
                  <div className="right_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/phoenix_logo.png"
                        alt="Phoenix Logo"
                      />
                    </a>
                    <p>
                      <a href="league.html">Phoenix Suns</a>
                    </p>
                  </div>
                </div>
                <div className="slider_footer d-flex align-items-center justify-content-between">
                  <p>April 14, 2021</p>
                  <p>02:00 AM</p>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="inner">
                <div className="slider_body d-flex align-items-start justify-content-evenly justify-content-sm-around">
                  <div className="left_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/atlanta_logo.png"
                        alt="Atlanta Hawks"
                      />
                    </a>
                    <p>
                      <a href="league.html">Atlanta Hawks</a>
                    </p>
                  </div>
                  <div className="mid_col d-flex align-items-center justify-content-center">
                    <img src="assets/images/games/vs.png" alt="Versus" />
                  </div>
                  <div className="right_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/miami.png"
                        alt="Miami Heat"
                      />
                    </a>
                    <p>
                      <a href="league.html">Miami Heat</a>
                    </p>
                  </div>
                </div>
                <div className="slider_footer d-flex align-items-center justify-content-between">
                  <p>April 14, 2021</p>
                  <p>02:00 AM</p>
                </div>
              </div>
            </div>
            <div className="slider_items">
              <div className="inner">
                <div className="slider_body d-flex align-items-start justify-content-evenly justify-content-sm-around">
                  <div className="left_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/browns_logo.png"
                        alt="Cleveland Browns"
                      />
                    </a>
                    <p>
                      <a href="league.html">Cleveland Browns</a>
                    </p>
                  </div>
                  <div className="mid_col d-flex align-items-center justify-content-center">
                    <img src="assets/images/games/vs.png" alt="Versus" />
                  </div>
                  <div className="right_col text-center">
                    <a href="league.html">
                      <img
                        src="assets/images/games/baltimore_logo.png"
                        alt="Baltimore Logo"
                      />
                    </a>
                    <p>
                      <a href="league.html">Baltimore Ravens</a>
                    </p>
                  </div>
                </div>
                <div className="slider_footer d-flex align-items-center justify-content-between">
                  <p>April 14, 2021</p>
                  <p>02:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second_buy">
        <div className="container">
          <div className="buy_wrapper">
            <div className="row buy_row d-flex align-items-center">
              <div className="col-lg-6 order-last order-lg-first">
                <div className="left_inner text-center text-lg-left">
                  <img
                    src="assets/images/buy/buy_illustration.png"
                    alt="Buy Illustration"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right_inner">
                  <h1 className="section_title">Buy Low, Sell High</h1>
                  <p className="section_info">
                    Changes in Players Share prices provide a valuable
                    opportunity to profit from trading either long or short
                    term. The concept is simple: buy low and sell high.
                  </p>
                  <div className="inner_row d-flex align-items-center">
                    <div className="left_col">
                      <div className="inner">
                        <img
                          src="assets/images/buy/players.png"
                          alt="Players"
                        />
                      </div>
                    </div>
                    <div className="right_col">
                      <div className="inner">
                        <p className="para">
                          Players who beat projections raise in value
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="inner_row d-flex align-items-center">
                    <div className="left_col">
                      <div className="inner">
                        <img src="assets/images/buy/invest.png" alt="Invest" />
                      </div>
                    </div>
                    <div className="right_col">
                      <div className="inner">
                        <p className="para">Invest in the value of a player</p>
                      </div>
                    </div>
                  </div>
                  <div className="inner_row d-flex align-items-center">
                    <div className="left_col">
                      <div className="inner">
                        <img src="assets/images/buy/trade.png" alt="Trade" />
                      </div>
                    </div>
                    <div className="right_col">
                      <div className="inner">
                        <p className="para">Trade from Anywhere, Anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row play_row d-flex align-items-center">
            <div className="col-lg-5">
              <div className="inner">
                <h1 className="section_title">
                  Play all the sports you love, all in one place!
                </h1>
                <p className="section_info">
                  Buy, sell or trade your favourite athletes just like stocks on
                  a stock market.
                </p>
                <div className="inner_row d-flex align-items-center">
                  <div className="inner_col">
                    <div className="left_col">
                      <img
                        src="assets/images/play/payment.png"
                        alt="Secure Payments"
                      />
                    </div>
                  </div>
                  <div className="inner_col">
                    <div className="right_col">
                      <h5>Secure Payments</h5>
                    </div>
                  </div>
                </div>
                <div className="inner_row d-flex align-items-center">
                  <div className="inner_col">
                    <div className="left_col">
                      <img
                        src="assets/images/play/transparent.png"
                        alt="Transparent"
                      />
                    </div>
                  </div>
                  <div className="inner_col">
                    <div className="right_col">
                      <h5>Transparent</h5>
                    </div>
                  </div>
                </div>
                <div className="inner_row d-flex align-items-center">
                  <div className="inner_col">
                    <div className="left_col">
                      <img
                        src="assets/images/play/multi.png"
                        alt="Multi Sports"
                      />
                    </div>
                  </div>
                  <div className="inner_col">
                    <div className="right_col">
                      <h5>Multi-Sports</h5>
                    </div>
                  </div>
                </div>
                <div className="inner_row d-flex align-items-center">
                  <div className="inner_col">
                    <div className="left_col">
                      <img
                        src="assets/images/play/support.png"
                        alt="24/7 Support"
                      />
                    </div>
                  </div>
                  <div className="inner_col">
                    <div className="right_col">
                      <h5>24/7 Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="inner text-center text-lg-end">
                <img
                  src="assets/images/play/illustration.png"
                  alt="Play Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="invite_wrapper">
            <div className="row invite_row d-flex align-items-center">
              <div className="col-lg-8">
                <div className="inner">
                  <h1>Invite Friends.</h1>
                  <h1>Get Free Stock.</h1>
                  <p className="section_info">
                    Once your friends sign up and deposit funds, you'll both get
                    a free stock!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="inner text-left text-lg-center">
                  <a href="trade.html" className="btn btn-primary">
                    Get Free Stock
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial_section">
        <div className="container">
          <div className="testimonial_title_wrapper text-center">
            <h1 className="section_title">
              What do you like most about the stock market of sports?
            </h1>
          </div>
          <div className="row testimonial_row">
            <div className="col-md-6 col-lg-4">
              <div className="inner">
                <p className="para">
                  Bold Exchange is the future of daily fantasy! Trade teams like
                  stocks, build your portfolio, and dominate the competition.
                </p>
                <div className="members_info d-flex align-items-center">
                  <div className="avatar">
                    <a href="player-profile.html">
                      <img
                        src="assets/images/testimonial/ava_1.png"
                        alt="Mike Tucker"
                      />
                    </a>
                  </div>
                  <div className="name flex-grow-1">
                    <h6>
                      <a href="player-profile.html">Mike Tucker</a>
                    </h6>
                    <span>New York</span>
                  </div>
                  <div className="twitter_account">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="inner">
                <p className="para">
                  It is a great idea. It's a ton of fun and I found myself
                  caring about the results of games that didn't actually happen.
                </p>
                <div className="members_info d-flex align-items-center">
                  <div className="avatar">
                    <a href="player-profile.html">
                      <img
                        src="assets/images/testimonial/ava_2.png"
                        alt="Mike Tucker"
                      />
                    </a>
                  </div>
                  <div className="name flex-grow-1">
                    <h6>
                      <a href="player-profile.html">Keith Marsh</a>
                    </h6>
                    <span>Washington, DC</span>
                  </div>
                  <div className="twitter_account">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="inner">
                <p className="para">
                  Investing in sports is the future & I look forward to seeing
                  how Bold Exchange will continue to innovate way we follow
                  sports.
                </p>
                <div className="members_info d-flex align-items-center">
                  <div className="avatar">
                    <a href="player-profile.html">
                      <img
                        src="assets/images/testimonial/ava_3.png"
                        alt="Mike Tucker"
                      />
                    </a>
                  </div>
                  <div className="name flex-grow-1">
                    <h6>
                      <a href="player-profile.html">Vera Brock</a>
                    </h6>
                    <span>Chicago, IL</span>
                  </div>
                  <div className="twitter_account">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accordion_section">
        <div className="container">
          <div className="accordion_wrapper">
            <div className="title_wrapper text-center">
              <h1 className="section_title">Frequently asked questions</h1>
              <p className="section_info">
                If you haven't found an answer to your question,{" "}
                <a href="contact.html">contact us</a>
              </p>
              <a href="contact.html" className="btn btn-primary">
                ASK A QUESTION
              </a>
            </div>
            <div className="accordion" id="accordionOne">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What
                    is "trading" on PlayerTrader?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p className="para">
                      "Trading" refers to the buying and selling of shares of
                      players on the Player Trader Platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What
                    drives a player's stock?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p className="para">
                      "Trading" refers to the buying and selling of shares of
                      players on the Player Trader Platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What
                    sports can I trade players from?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p className="para">
                      "Trading" refers to the buying and selling of shares of
                      players on the Player Trader Platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What
                    is my reward for reffering a friend?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p className="para">
                      "Trading" refers to the buying and selling of shares of
                      players on the Player Trader Platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    <img src="assets/images/faq/ac-icon.png" alt="Icon" /> How
                    do I make a deposit?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p className="para">
                      "Trading" refers to the buying and selling of shares of
                      players on the Player Trader Platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    <img src="assets/images/faq/ac-icon.png" alt="Icon" /> Is my
                    money safe?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionOne"
                >
                  <div className="accordion-body">
                    <p className="para">
                      "Trading" refers to the buying and selling of shares of
                      players on the Player Trader Platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="competion_wrapper">
        <div className="container">
          <div className="competition">
            <div className="competition_content text-center">
              <h5>READY TO PLAY?</h5>
              <h1 className="section_title">Join the Competition!</h1>
              <p className="section_info">
                Signing Up is easy, tading your way to the top, that's up to you
              </p>
              <a href="trade.html" className="btn btn-primary">
                Start Trading
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
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
                    PRIVACY POLICY
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
                      alt="Download from Google Play Store"
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

      <a href="#" className="scrollToTop">
        <i className="flaticon-up-chevron"></i>
      </a>
    </>
  );
}
