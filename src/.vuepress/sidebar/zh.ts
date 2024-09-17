import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/notes/": [
    {
      text: "笔记",
      icon: "book",
      prefix: "",
      children: "structure",
    },
  ],

  "/blogs/": [
    {
      text: "博客",
      icon: "laptop-code",
      prefix: "",
      children: "structure",
    },
  ],
  "/ceshi/": [
    {
      text: "测试区",
      icon: "laptop-code",
      prefix: "",
      children: "structure",
    },
  ]
});
