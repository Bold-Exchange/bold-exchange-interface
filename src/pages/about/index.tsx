import { useEffect } from "react";
const Docspage = () => {
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
        } else {
          $("#dark").addClass("actives");
          $(".th-o").removeClass("oactive");
          $(".th-t").addClass("oactive");
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
    <div className="container-fluid main_content">
      <div className="row d-flex flex-wrap">
        <div className="col-xl-9 d-flex flex-column">
          <div className="inner_left">
            <div
              className="cover_img d-flex align-items-end align-items-md-end"
              style={{
                backgroundImage: "url('assets/images/user/illustration.png')",
              }}
            >
              <div className="profile_lg_wrapper d-flex align-items-center align-items-md-end">
                <div className="profile_content d-flex align-items-center justify-content-center">
                  <a href="user-about.html">
                    <img
                      src="assets/images/user/profile_lg.png"
                      alt="Profile Picture"
                    />
                  </a>
                  <span className="d-flex align-items-center justify-content-center">
                    12
                  </span>
                </div>
                <div className="profile_info">
                  <p>Poland</p>
                  <a href="user-about.html">ED WALSH</a>
                </div>
              </div>
            </div>
            <div className="profile_info_wrapper">
              <div className="row tag_icon_wrapper d-flex align-items-center justify-content-between">
                <div className="col-sm-7 tag_icon text-center text-sm-start">
                  <a
                    href="league.html"
                    className="d-inline-flex align-items-center justify-content-center badge"
                  >
                    <img src="assets/images/user/badge.png" alt="Badge" />
                  </a>
                  <a
                    href="league.html"
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="flaticon-basketball-ball-variant"></i>
                  </a>
                  <a
                    href="league.html"
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="flaticon-rugby"></i>
                  </a>
                  <a
                    href="league.html"
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="flaticon-baseball-ball-1"></i>
                  </a>
                  <a
                    href="league.html"
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="flaticon-ice-hockey"></i>
                  </a>
                  <a
                    href="league.html"
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="flaticon-football"></i>
                  </a>
                </div>
                <div className="col-sm-5 follow_wrapper d-flex align-items-center justify-content-between justify-content-sm-around">
                  <div className="follower d-flex align-items-center justify-content-between">
                    <div className="icon">
                      <i className="flaticon-user-profile"></i>
                    </div>
                    <div className="amount">
                      <a href="#followers">2,239</a>
                      <p>FOLLOWERS</p>
                    </div>
                  </div>
                  <div className="following d-flex align-items-center justify-content-between">
                    <div className="icon">
                      <i className="flaticon-user-profile"></i>
                    </div>
                    <div className="amount">
                      <a href="#followers">5,339</a>
                      <p>FOLLOWING</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab_wrapper">
              <div className="row tab_btn_row d-flex align-items-center justify-content-between">
                <div className="tab_btn_wrapper col-sm-8 order-last order-sm-first text-center text-sm-start">
                  <button className="btn tab_btn active" data-tab="about">
                    About
                  </button>
                  <div className="f_drop">
                    <button className="btn dr_btn">
                      Followers <i className="fas fa-sort-down"></i>
                    </button>
                    <div className="f_con">
                      <button className="btn tab_btn" data-tab="followers">
                        Layout One
                      </button>
                      <button className="btn tab_btn" data-tab="followers2">
                        Layout Two
                      </button>
                    </div>
                  </div>
                  <button className="btn tab_btn" data-tab="stats">
                    Stats
                  </button>
                </div>
                <div className="social_wrapper col-sm-4 text-center text-sm-end">
                  <a
                    href="#"
                    className="fb d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="tw d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="ins d-inline-flex align-items-center justify-content-center"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div id="about" className="profile_tab active">
                <h3>About</h3>
                <p className="para">
                  Praesent enim felis, sagittis ut mollis a, sodales a lacus.
                  Suspendisse potenti. Etiam a felis urna. Pellentesque nec urna
                  sed dui vulputate blandit tincidunt at risus. Morbi erat
                  ligula, venenatis et tempus a, eleifend commodo ipsum.
                  Phasellus porttitor egestas interdum. Donec quis lacinia ante.
                </p>
                <ul>
                  <li>
                    <i className="fas fa-angle-right"></i> Vestibulum rutrum
                    tortor eu lobortis fringilla, Pha.sellus mollis rhoncus nisl
                    eget finibus.
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i> Maecenas eleifend
                    sagittis varius. Etiam erat nisl.
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i> Etiam a felis urna.
                    Pellentesque nec urna sed dui vulputate blandit tincidunt at
                    risus.
                  </li>
                </ul>
                <div className="revenue_chart_wrapper">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="left_col">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4>Revenue Statistics</h4>
                          <div className="dropdown">
                            <a
                              className="btn btn-secondary dropdown-toggle d-flex align-items-center"
                              href="#"
                              role="button"
                              id="month"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Current Month{" "}
                              <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="month"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  Jan
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Feb
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Mar
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Apr
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  May
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  June
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="revenue_chart">
                          <div id="revenue"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="right_col">
                        <ul className="nav nav-fill">
                          <li className="nav-item">
                            <a className="nav-link active chartHover" href="#">
                              01M
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link chartHover" href="#">
                              06M
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link chartHover" href="#">
                              01Y
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link chartHover" href="#">
                              ALL
                            </a>
                          </li>
                        </ul>
                        <div className="income_chart_wrapper">
                          <h3 className="balance">
                            <i className="fas fa-dollar-sign"></i> 125952
                          </h3>
                          <p>Income</p>
                          <div id="incomeChart"></div>
                        </div>
                        <div className="invest_chart_wrapper">
                          <h3 className="invest">65%</h3>
                          <p>Return on Investment</p>
                          <div id="investChart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="followers" className="profile_tab">
                <div className="search_wrapper">
                  <form
                    action="#"
                    method="post"
                    id="searchFriend"
                    className="search_wrapper d-md-flex align-items-center justify-content-between"
                  >
                    <div className="input_wrapper">
                      <input
                        type="search"
                        name="searchFriend"
                        id="searchFriends"
                        placeholder="Search Friends"
                        required
                      />
                      <i className="flaticon-loupe"></i>
                    </div>
                    <div className="submit_wrapper">
                      <button
                        type="submit"
                        className="d-flex align-items-center"
                        title="Find Your Friends"
                      >
                        <i className="fas fa-users"></i> Find Friends
                      </button>
                    </div>
                  </form>
                </div>
                <div className="row followers_row_first">
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/gera.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                18
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Gerard Cain
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/eva.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                28
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Eva Doyle
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="league.html">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row followers_row_first">
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/greg.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                22
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Greg Hardy
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/wise.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                16
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Horace Wise
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row followers_row_first">
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/boone.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                13
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Willie Boone
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/alyssa.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                19
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Alyssa loyd
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row followers_row_first">
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/lionel.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                27
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Lionel Moody
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="left_col">
                      <div className="d-sm-flex align-items-center justify-content-around">
                        <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                          <div className="profile_wrapper">
                            <div className="profile_content">
                              <a href="player-profile.html" className="profile">
                                <img
                                  src="assets/images/followers/joanna.png"
                                  alt="Profile Picture"
                                />
                              </a>
                              <span className="d-flex align-items-center justify-content-center">
                                18
                              </span>
                            </div>
                          </div>
                          <div className="info_wrapper text-center text-sm-start">
                            <a href="player-profile.html" className="name">
                              Joanna Grey
                            </a>
                            <p className="percentage">ROI 21%</p>
                          </div>
                        </div>
                        <div className="icon_wrapper text-center text-sm-start">
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-basketball-ball-variant"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-rugby"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-baseball-ball-1"></i>
                          </a>
                          <a
                            href="league.html"
                            className="d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="flaticon-golf"></i>
                          </a>
                        </div>
                        <div className="follow_wrapper text-center text-sm-start">
                          <a href="#">Unfollow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row followers_row_first"></div>
                <div className="show_wrapper text-center">
                  <a href="#">View More</a>
                </div>
              </div>
              <div id="followers2" className="profile_tab">
                <div className="search_wrapper">
                  <form
                    action="#"
                    method="post"
                    id="searchFriend2"
                    className="search_wrapper d-md-flex align-items-center justify-content-between"
                  >
                    <div className="input_wrapper">
                      <input
                        type="search"
                        name="searchFriend"
                        id="searchFriends2"
                        placeholder="Search Friends"
                        required
                      />
                      <i className="flaticon-loupe"></i>
                    </div>
                    <div className="submit_wrapper">
                      <button
                        type="submit"
                        className="d-flex align-items-center"
                        title="Find Your Friends"
                      >
                        <i className="fas fa-users"></i> Find Friends
                      </button>
                    </div>
                  </form>
                </div>
                <div className="row followers_two_row">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/kurt_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/kurt.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">KURT SHAW</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/dennis_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/dennis.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">DENNIS MEYER</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/lyle_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/lyle.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">LYLE REED</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/larry_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/larry.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">LARRY CHAVEZ</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row followers_two_row">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/debra_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/debra.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">DEBRA YATES</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/megan_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/megan.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">MEGAN JENSEN</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/sam_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/sam.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">SAM GILBERT</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/elena_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/elena.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">ELLENA CANNON</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row followers_two_row">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/gina_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/gina.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">GINA FLORES</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/abel_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/abel.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">ABEL WARREN</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/ollie_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/ollie.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">OLLIE FLOYD</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                    <div className="followers_col">
                      <div className="member_wrapper">
                        <div className="bg_head">
                          <img
                            src="assets/images/followers/noel_bg.png"
                            alt="Cover Image"
                          />
                        </div>
                        <div className="profile_wrapper text-center">
                          <div className="profile_content">
                            <a href="#" className="profile">
                              <img
                                src="assets/images/followers/noel.png"
                                alt="Profile Picture"
                              />
                            </a>
                            <span className="d-flex align-items-center justify-content-center">
                              18
                            </span>
                          </div>
                          <h5 className="text-center">
                            <a href="player-profile.html">NOEL THOMAS</a>
                          </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                          <div className="follower d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">2,239</a>
                              <p>FOLLOWERS</p>
                            </div>
                          </div>
                          <div className="following d-flex align-items-center justify-content-between">
                            <div className="icon">
                              <i className="flaticon-user-profile"></i>
                            </div>
                            <div className="amount">
                              <a href="#">5,339</a>
                              <p>FOLLOWING</p>
                            </div>
                          </div>
                        </div>
                        <div className="follow_btn text-center">
                          <a href="#">FOLLOW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show_wrapper text-center">
                  <a href="#">View More</a>
                </div>
              </div>
              <div id="stats" className="profile_tab">
                <div className="revenue_chart_wrapper">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="left_col">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4>Revenue Statistics</h4>
                          <div className="dropdown">
                            <a
                              className="btn btn-secondary dropdown-toggle d-flex align-items-center"
                              href="#"
                              role="button"
                              id="monthDuplicate"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Current Month{" "}
                              <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="monthDuplicate"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  Jan
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Feb
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Mar
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Apr
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  May
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  June
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="revenue_chart">
                          <div id="revenueDuplicate"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="right_col">
                        <ul className="nav nav-fill">
                          <li className="nav-item">
                            <a className="nav-link active chartHover" href="#">
                              01M
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link chartHover" href="#">
                              06M
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link chartHover" href="#">
                              01Y
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link chartHover" href="#">
                              ALL
                            </a>
                          </li>
                        </ul>
                        <div className="income_chart_wrapper">
                          <h3 className="balance">
                            <i className="fas fa-dollar-sign"></i> 125952
                          </h3>
                          <p>Income</p>
                          <div id="incomeChartDuplicate"></div>
                        </div>
                        <div className="invest_chart_wrapper">
                          <h3 className="invest">65%</h3>
                          <p>Return on Investment</p>
                          <div id="investChartDuplicate"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 d-flex flex-column">
          <div className="inner_right">
            <div className="view_wrapper d-flex align-items-center justify-content-between">
              <div className="text">
                <h5>Top Investors</h5>
              </div>
              <div className="link">
                <a href="league.html">VIEW ALL</a>
              </div>
            </div>
            <div className="row member_row">
              <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                <div className="member_wrapper">
                  <div className="bg_head">
                    <img
                      src="assets/images/user/side_bar_bg_one.png"
                      alt="Sidebar Image"
                    />
                  </div>
                  <div className="profile_wrapper text-center">
                    <div className="profile_content">
                      <a href="player-profile.html" className="profile">
                        <img
                          src="assets/images/user/member_one.png"
                          alt="Profile Picture"
                        />
                      </a>
                      <span className="d-flex align-items-center justify-content-center">
                        18
                      </span>
                    </div>
                    <h5 className="text-center">
                      <a href="player-profile.html">RAUL QUINN</a>
                    </h5>
                  </div>
                  <div className="follow_wrapper d-flex align-items-center justify-content-around">
                    <div className="follower d-flex align-items-center justify-content-between">
                      <div className="icon">
                        <i className="flaticon-user-profile"></i>
                      </div>
                      <div className="amount">
                        <a href="user-about.html#followers">2,239</a>
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
                  <div className="income_wrapper d-flex align-items-center justify-content-around">
                    <div className="income">
                      <p className="income_amount">
                        <i className="fas fa-dollar-sign"></i>1259
                      </p>
                      <span>Income</span>
                    </div>
                    <div className="percentage">
                      <p className="income_percent">40%</p>
                      <span>ROI</span>
                    </div>
                  </div>
                  <div className="follow_btn text-center">
                    <a href="#">FOLLOW</a>
                  </div>
                </div>
              </div>
              <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                <div className="member_wrapper">
                  <div className="bg_head">
                    <img
                      src="assets/images/user/side_bar_bg_two.png"
                      alt="Sidebar Image"
                    />
                  </div>
                  <div className="profile_wrapper text-center">
                    <div className="profile_content">
                      <a href="player-profile.html" className="profile">
                        <img
                          src="assets/images/user/member_two.png"
                          alt="Profile Picture"
                        />
                      </a>
                      <span className="d-flex align-items-center justify-content-center">
                        24
                      </span>
                    </div>
                    <h5 className="text-center">
                      <a href="player-profile.html">MARRION CURRY</a>
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
                  <div className="income_wrapper d-flex align-items-center justify-content-around">
                    <div className="income">
                      <p className="income_amount">
                        <i className="fas fa-dollar-sign"></i>1259
                      </p>
                      <span>Income</span>
                    </div>
                    <div className="percentage">
                      <p className="income_percent">40%</p>
                      <span>ROI</span>
                    </div>
                  </div>
                  <div className="follow_btn text-center">
                    <a href="#">FOLLOW</a>
                  </div>
                </div>
              </div>
              <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                <div className="member_wrapper">
                  <div className="bg_head">
                    <img
                      src="assets/images/user/side_bar_bg_three.png"
                      alt="Sidebar Image"
                    />
                  </div>
                  <div className="profile_wrapper text-center">
                    <div className="profile_content">
                      <a href="player-profile.html" className="profile">
                        <img
                          src="assets/images/user/member_three.png"
                          alt="Profile Picture"
                        />
                      </a>
                      <span className="d-flex align-items-center justify-content-center">
                        22
                      </span>
                    </div>
                    <h5 className="text-center">
                      <a href="player-profile.html">HUBERT WEST</a>
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
                  <div className="income_wrapper d-flex align-items-center justify-content-around">
                    <div className="income">
                      <p className="income_amount">
                        <i className="fas fa-dollar-sign"></i>1259
                      </p>
                      <span>Income</span>
                    </div>
                    <div className="percentage">
                      <p className="income_percent">40%</p>
                      <span>ROI</span>
                    </div>
                  </div>
                  <div className="follow_btn text-center">
                    <a href="#">FOLLOW</a>
                  </div>
                </div>
              </div>
              <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                <div className="member_wrapper">
                  <div className="bg_head">
                    <img
                      src="assets/images/user/side_bar_bg_four.png"
                      alt="Sidebar Image"
                    />
                  </div>
                  <div className="profile_wrapper text-center">
                    <div className="profile_content">
                      <a href="player-profile.html" className="profile">
                        <img
                          src="assets/images/user/member_four.png"
                          alt="Profile Picture"
                        />
                      </a>
                      <span className="d-flex align-items-center justify-content-center">
                        27
                      </span>
                    </div>
                    <h5 className="text-center">
                      <a href="player-profile.html">BARRY HARPER</a>
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
                  <div className="income_wrapper d-flex align-items-center justify-content-around">
                    <div className="income">
                      <p className="income_amount">
                        <i className="fas fa-dollar-sign"></i>1259
                      </p>
                      <span>Income</span>
                    </div>
                    <div className="percentage">
                      <p className="income_percent">40%</p>
                      <span>ROI</span>
                    </div>
                  </div>
                  <div className="follow_btn text-center">
                    <a href="#">FOLLOW</a>
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
        </div>
      </div>
    </div>
  );
};

export default Docspage;
