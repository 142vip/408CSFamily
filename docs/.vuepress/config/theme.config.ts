import { FOOTER_HTML_INFO } from "./constant.config.js";
import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar.js";
import { sidebar } from "./sidebar.js";

/**
 * hope 主题配置
 * @see https://theme-hope.vuejs.press/zh/config/
 */

export default {
  theme: hopeTheme({
    hostname: "https://408.142vip.cn",
    author: {
      name: "Chu Fan",
      email: "fairy_408@2925.com",
      url: "https://www.142vip.cn",
    },
    favicon: "/408_favicon.ico",
    repo: "https://github.com/142vip/408CSFamily",
    logo: "/assets/408_logo.png",
    logoDark: "/assets/408_logo.png",

    navbar,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Search", "Repo", "Outlook"],
    },
    sidebar,
    displayFooter: true,
    footer: FOOTER_HTML_INFO,

    darkmode: "toggle",
    fullscreen: true,
    print: false,

    // 博客配置
    blog: {
      name: "凡是过往",
      roundAvatar: true,
      medias: {
        BiliBili: "https://space.bilibili.com/350937042",
      },
    },

    plugins: {
      blog: true,
      copyCode: {
        showInMobile: true,
      },
      feed: {
        json: true,
      },
      mdEnhance: {
        codetabs: true,
      },
    },
  }),
};
