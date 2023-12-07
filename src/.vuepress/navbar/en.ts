import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/notes/",
  "/blog/",
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
  {
    text: "主页",
    icon: "home",
    children: ["/intro.md"],
  },

]);
