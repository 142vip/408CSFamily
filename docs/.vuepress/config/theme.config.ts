import {FOOTER_HTML_INFO} from "./constant.config";
import {hopeTheme} from "vuepress-theme-hope";
import {langConfig} from "./lang.config";
import {navbar} from "./navbar";
import {sidebar} from "./sidebar";

/**
 * hope主题配置
 * 参考：https://theme-hope.vuejs.press/zh/config/
 */

export default {
  theme: hopeTheme({
    locales: langConfig,
    darkmode: "toggle",
    // 支持全屏
    fullscreen: true,
    // 纯净模式s
    // pure: true,
    print: false, // 打印按钮
    hostname: 'https://408.142vip.cn',
    author: {
      name: '微信公众号：储凡',
      email: 'fairy_408@2925.com',
      url: 'https://www.142vip.cn'
    },
    favicon: "/408_favicon.ico",
    logo: "/assets/408_logo.png",
    navbar: navbar,
    // 导航栏布局
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Search", "Repo", "Outlook",]
    },
    sidebar: sidebar,
    // sidebar: "heading",

    // 主题布局选项
    repo: "https://github.com/142vip/408CSFamily",
    logoDark: "/assets/408_logo.png",

    // 博客配置
    // blog: {
    //   name: '凡是过往',
    //   avatar: '',
    //   description: '',
    //   intro: '',
    //   roundAvatar: true,
    //   timeline: "时间轴的顶部文字",
    //   // articleInfo:"",
    //   // sidebarDisplay:"always",
    //   medias: {
    //     "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
    //   }
    // },
    // 设置页脚
    displayFooter: true,
    footer: FOOTER_HTML_INFO,
    // copyright:false,
    // 主题色选择器
    themeColor: true,
    plugins: {
      copyright: false,
      // 开启博客功能
      blog: false,
      // 代码块
      mdEnhance: {
        codetabs: true,
        tasklist: true, // 支持任务列表
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        playground: {
          presets: ["ts", "vue"],
        },
        // 是否启用幻灯片
        revealjs: ["highlight", "math", "search", "notes", "zoom"],
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({tag}) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: {type: "tip"},
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
        // 文件导入
        include: true,
        // 容器
        container: true,
        // mermaid
        mermaid: true,
        // 自定义对齐
        align: true,
      },
      components: {
        // 插件选项
        components: [
          "ArtPlayer",
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "Share",
          "SiteInfo",
          "StackBlitz",
          // "VidStack",
          "VideoPlayer",
          "XiGua",
          "YouTube",
        ],
      },
      copyCode: {
        showInMobile: true
      },
      feed: {
        json: true,
      },
    },
  })
}