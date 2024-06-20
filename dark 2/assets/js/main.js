(function ($) {
    "use strict";

    $(document).ready(function () {

        //codes for wow animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow',
                // animated element css class (default is wow)
                animateClass: 'animated',
                // animation css class (default is animated)
                offset: 0,
                // distance to the element when triggering the animation (default is 0)
                mobile: false,
                // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


        //preloader
        $("#preloader").delay(3500).animate({
            "opacity": "0"
        }, 500, function () {
            $("#preloader").css("display", "none");
        });

        //preloader counter
        $('.counterr').counterUp({
            delay: 10,
            time: 2900
        });

        //hambarger menu icon toggle
        $("#toggleIcon").click(function () {
            $(this).toggleClass("active");
        });

        $("#cog").click(function () {
            $(".theme-option").toggleClass("theme-active");
        });

        var otheme = $(".out-theme");
        $(otheme).on('click', function () {
            $(otheme).removeClass('oactive');
            $(this).addClass('oactive');
        });

        //codes for log in and sign up button styles in navbar
        var exchange = $(".registration");
        $(exchange).on('mouseover', function () {
            $(exchange).removeClass('hover');
            $(this).addClass('hover');
        });

        //codes for second home nav background change on scroll
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 30) {
                if ($('body').hasClass('dark')) {
                    $(".navbar_two").css("background", "#fff");
                } else {
                    $(".navbar_two").css("background", "#25294a");
                }
                $(".navbar").css("box-shadow", "0px 2px 2px -2px #25294a");
            }
            else {
                $(".navbar_two").css("background", "transparent");
                $(".navbar").css("box-shadow", "0px 0px 0px 0px transparent");
            }
        });


        //codes for video popup
        $('.video_popup').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%'
                    },

                },

                srcAction: 'iframe_src',
            }
        });

        //home carousel codes
        $('.slider_row').owlCarousel({
            rtl: false,
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        //game carousel codes
        $('.game_slider_row').owlCarousel({
            rtl: false,
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        //about counter up codes
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        //codes for video popup
        $('.video_popup').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%'
                    },
                },
                srcAction: 'iframe_src',
            }
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
        $(window).on('scroll', function () {
            if ($(this).scrollTop() < 500) {
                ScrollTop.removeClass("active");
            } else {
                ScrollTop.addClass("active");
            }
        });
        $('.scrollToTop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
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
        $('.tab_btn').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('.tab_btn').removeClass('active');
            $('.profile_tab').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

        //code followers
        $(".f_drop").hover(function () {
            $(".f_con").toggle();
        });

        //codes for log in and sign up button styles in navbar
        var chartExchange = $(".chartHover");
        $(chartExchange).on('mouseover', function () {
            $(chartExchange).removeClass('active');
            $(this).addClass('active');
        });

        //codes for Players search tabs
        $('.tab_btnp').click(function () {
            var tab_idp = $(this).attr('data-tab');

            $('.tab_btnp').removeClass('activ');
            $('.player_search_tabs').removeClass('activ');

            $(this).addClass('activ');
            $("#" + tab_idp).addClass('activ');
        });

        //codes for trade tabs
        $('.trd_tab').click(function () {
            var trd_id = $(this).attr('data-tab');

            $('.trd_tab').removeClass('activeb');
            $('.trade_tab').removeClass('activet');

            $(this).addClass('activeb');
            $("#" + trd_id).addClass('activet');
        });

        //codes for faq tabs
        $('.rul_btn').click(function () {
            var rul_is = $(this).attr('data-tab');

            $('.rul_btn').removeClass('activer');
            $('.rul_tab').removeClass('activecr');

            $(this).addClass('activer');
            $("#" + rul_is).addClass('activecr');
        });

        //codes for theme switcher
        var switchTheme = $(".switcher");
        $(switchTheme).on('click', function () {
            $(switchTheme).removeClass('actives');
            $(this).addClass('actives');
        });

        // codes for theme color change
        $('#light').on('click', function () {
            window.localStorage.setItem('dark-theme', $("body").addClass('dark'));
            $("#logo").attr("src", "assets/images/logo-dark-n.png");
            $("img[src='assets/images/user/vs.png']").attr("src", "assets/images/user/ac-vs.png");
            $("img[src='assets/images/profile/referral.png']").attr("src", "assets/images/profile/ac-ref.png");
            $("img[src='assets/images/profile/last_month.png']").attr("src", "assets/images/profile/ac-last.png");
        });
        if (localStorage.getItem('dark-theme')) {
            $("body").addClass('dark');
            $("#light").addClass('actives');
            $(".th-t").removeClass('oactive');
            $(".th-o").addClass('oactive');
            $("#logo").attr("src", "assets/images/logo-dark-n.png");
            $("img[src='assets/images/user/vs.png']").attr("src", "assets/images/user/ac-vs.png");
            $("img[src='assets/images/profile/referral.png']").attr("src", "assets/images/profile/ac-ref.png");
            $("img[src='assets/images/profile/last_month.png']").attr("src", "assets/images/profile/ac-last.png");
        } else {
            $("#dark").addClass('actives');
            $(".th-o").removeClass('oactive');
            $(".th-t").addClass('oactive');
            $("#logo").attr("src", "assets/images/logo.png");
            $("img[src='assets/images/user/ac-vs.png']").attr("src", "assets/images/user/vs.png");
            $("img[src='assets/images/profile/ac-ref.png']").attr("src", "assets/images/profile/referral.png");
            $("img[src='assets/images/profile/ac-last.png']").attr("src", "assets/images/profile/last_month.png");
        }

        $('#dark').on('click', function () {
            $("body").removeClass('dark');
            localStorage.removeItem("dark-theme");
            $("#dark").addClass('actives');
            $("#logo").attr("src", "assets/images/logo.png");
            $("img[src='assets/images/user/ac-vs.png']").attr("src", "assets/images/user/vs.png");
            $("img[src='assets/images/profile/ac-ref.png']").attr("src", "assets/images/profile/referral.png");
            $("img[src='assets/images/profile/ac-last.png']").attr("src", "assets/images/profile/last_month.png");
        });

    });

})(jQuery);