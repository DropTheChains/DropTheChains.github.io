import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/notes/": [
    {
      text: "Notes",
      icon: "book",
      prefix: "noteposts/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
  "/blog/": [
    {
      text: "Blog",
      icon: "laptop-code",
      prefix: "blogposts/",
      children: "structure",
    },

  ]
});
