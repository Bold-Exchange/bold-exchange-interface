import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    // {
    //   path: "/",
    //   component: "@/layouts/Index",
    //   routes: [
    //     { path: "/", component: "index" },
    //     { path: "/login", component: "login" },
    //     { path: "/register", component: "register" },
    //   ],
    // },
    {
      path: "/",
      component: "@/layouts/Admin",
      routes: [
        { path: "/", component: "index" },
        { path: "/trade", component: "trade" },
        { path: "/portfolio", component: "portfolio" },
        { path: "/about", component: "about" },
      ],
    },
  ],

  npmClient: "pnpm",
  title: "Bold Exchange &mdash; Fantasy Sports Stock Exchange HTML Template",
  metas: [{ name: "keywords", content: "bold exchange" }],
  links: [
    // { href: "/assets/css/vendor/bootstrap.min.css", rel: "stylesheet" },
    // { href: "/assets/icons/font_awesome/css/all.min.css", rel: "stylesheet" },
    // { href: "/assets/icons/flat_icon/flaticon.css", rel: "stylesheet" },
    // { href: "/assets/css/vendor/owl.carousel.min.css", rel: "stylesheet" },
    // { href: "/assets/css/vendor/owl.theme.default.min.css", rel: "stylesheet" },
    // { href: "/assets/css/vendor/magnific-popup.css", rel: "stylesheet" },
    // { href: "/assets/css/vendor/nice-select.css", rel: "stylesheet" },
    // { href: "/assets/css/vendor/animate.css", rel: "stylesheet" },
    // { href: "/assets/css/main.css", rel: "stylesheet" },
  ],

  headScripts: [
    // { src: "/assets/js/vendor/jquery-3.6.0.min.js" },
    // { src: "/assets/js/vendor/bootstrap.bundle.min.js" },
    // { src: "/assets/js/vendor/jquery.waypoints.min.js" },
    // { src: "/assets/js/vendor/jquery.counterup.min.js" },
    // { src: "/assets/js/vendor/owl.carousel.min.js" },
    // { src: "/assets/js/vendor/jquery.magnific-popup.min.js" },
    // { src: "/assets/js/vendor/jquery.nice-select.min.js" },
    // { src: "/assets/js/vendor/wow.min.js" },
  ],

  history: {
    type: "hash",
  },
  hash: true,
  plugins: ["@umijs/plugins/dist/antd", "@umijs/plugins/dist/tailwindcss"],
  antd: {
    dark: true,
    compact: true,
    theme: {
      token: {
        colorPrimary: "#7289db",
      },
    },
  },
  tailwindcss: {},
});
