import { Outlet } from "umi";
import { useEffect } from "react";
const Layout = () => {
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
    <div className="page_wrapper">
      <div className="sidebar">
        <div className="brand_wrapper text-center d-flex align-items-center justify-content-around">
          <a href="index.html" className="brand">
            <img src="assets/Bold_Logo-white.svg" alt="Bold Exchange Logo" />
          </a>
          <div className="close_sidenav d-xxl-none" title="Close Side Bar">
            <i className="flaticon-back"></i>
          </div>
        </div>
        <div className="user_wrapper">
          <div className="profile_wrapper text-center">
            <div className="profile_content">
              <a href="user-about.html" className="profile">
                <img
                  src="assets/images/user/profile-sm.png"
                  alt="Profile Picture"
                />
              </a>
              <span className="d-flex align-items-center justify-content-center">
                12
              </span>
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
              <a
                href="#/admin/portfolio"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-briefcase"></i> My Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#/admin/about"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-user"></i> About
              </a>
            </li>
          </ul>
        </div>
        <div className="trading_wrapper">
          <h5>Trading</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center active"
              >
                <i className="flaticon-basketball-ball-variant"></i> NBA
              </a>
            </li>
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-rugby"></i> NFL
              </a>
            </li>
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-baseball-ball-1"></i> MLB
              </a>
            </li>
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-ice-hockey"></i> NHL
              </a>
            </li>
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-football"></i> Soccer
              </a>
            </li>
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-golf"></i> Golf
              </a>
            </li>
            <li className="nav-item">
              <a
                href="league.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-swords"></i> ESports
              </a>
            </li>
          </ul>
        </div>
        <div className="affiliate_wrapper">
          <ul className="nav flex-column affiliate">
            <li className="nav-item">
              <a
                href="affiliate.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-affiliate"></i> Affiliate Program
              </a>
            </li>
            <li className="nav-item">
              <a
                href="contact.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-chat"></i> Support
              </a>
            </li>
            <li className="nav-item">
              <a
                href="rules.html"
                className="nav-link d-flex align-items-center"
              >
                <i className="flaticon-document"></i> Rules
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar_footer d-flex align-items-center justify-content-around">
          <div className="left_col">
            <select name="selectPicker" id="language">
              <option value="english">English</option>
              <option value="spain">Spanish</option>
              <option value="bangla">Bangla</option>
            </select>
          </div>
          <div className="right_col">
            <div className="switch_wrapper">
              <button
                className="btn switcher"
                id="light"
                title="Switch to Light Theme"
              >
                <i className="fas fa-star-and-crescent"></i>
              </button>
              <button
                className="btn switcher"
                id="dark"
                title="Switch to Dark Theme"
              >
                <i className="fas fa-adjust"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body_content">
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
                  <input
                    type="search"
                    name="searchBar"
                    id="searchPlayers"
                    placeholder="Search Players"
                    required
                  />
                  <button type="submit">
                    <i className="flaticon-loupe"></i>
                  </button>
                </form>
                <a
                  href="javascript:void(0)"
                  className="search_toggle d-block d-md-none"
                >
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
                  <a href="#">
                    <img
                      src="assets/images/user/profile-sm.png"
                      alt="Profile Picture"
                    />
                  </a>
                </div>
                <div className="drop">
                  <a href="javascript:void(0)" className="profile_link disable">
                    Ed Walsh <i className="fas fa-caret-down"></i>
                  </a>
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
        <div className="container-fluid main_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
