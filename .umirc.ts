import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  title: "Bold Exchange &mdash; Fantasy Sports Stock Exchange HTML Template",
  metas: [{ name: "keywords", content: "bold exchange" }],
  favicons: ["/favicon.png"],
  links: [
    { href: "/assets/css/vendor/bootstrap.min.css", rel: "stylesheet" },
    { href: "/assets/icons/font_awesome/css/all.min.css", rel: "stylesheet" },
    { href: "/assets/icons/flat_icon/flaticon.css", rel: "stylesheet" },
    { href: "/assets/css/vendor/owl.carousel.min.css", rel: "stylesheet" },
    { href: "/assets/css/vendor/owl.theme.default.min.css", rel: "stylesheet" },
    { href: "/assets/css/vendor/magnific-popup.css", rel: "stylesheet" },
    { href: "/assets/css/vendor/nice-select.css", rel: "stylesheet" },
    { href: "/assets/css/vendor/animate.css", rel: "stylesheet" },
    { href: "/assets/css/main.css", rel: "stylesheet" },
  ],
  scripts: [
    { src: "/assets/js/vendor/jquery-3.6.0.min.js" },
    { src: "/assets/js/vendor/bootstrap.bundle.min.js" },
    { src: "/assets/js/vendor/jquery.waypoints.min.js" },
    { src: "/assets/js/vendor/jquery.counterup.min.js" },
    { src: "/assets/js/vendor/owl.carousel.min.js" },
    { src: "/assets/js/vendor/jquery.magnific-popup.min.js" },
    { src: "/assets/js/vendor/jquery.nice-select.min.js" },
    { src: "/assets/js/vendor/wow.min.js" },
    // { src: "/assets/js/main.js" },
  ],
});
