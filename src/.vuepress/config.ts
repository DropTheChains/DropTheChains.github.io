import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  lang: 'zh-CN',
  base: "/",


  locales: {
    "/": {
      lang: "zh-CN",
      title: "我的空间",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
