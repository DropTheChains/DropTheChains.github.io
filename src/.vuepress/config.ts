import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DropTheChains",
      description: "DropTheChains",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "ChainsBlog",
    //   description: "DropTheChains",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
