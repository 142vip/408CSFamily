import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default {
  title: "计算机应试全家桶",
  description: "磨刀不误砍柴工，读完硕士再打工",
  // base: "/408CSFamily/",
  port: 4200,
  head: [
    [
        "link", { rel: "icon", href: "/408_favicon.ico" }
    ],
    [
        // 百度统计
      'script',{},`
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  // 参考主题：https://theme-hope.vuejs.press/zh/config/intro.html#%E9%85%8D%E7%BD%AE%E6%A6%82%E5%BF%B5
  theme: hopeTheme({
    darkmode:"toggle",
    // 支持全屏
    fullscreen: true,
    // 纯净模式
    // pure: true,
    hostname:'https://408.142vip.cn',
    author:{
      name:'ChuFan',
      email:'fairy_408@2925.com',
      url:'https://www.142vip.cn'
    },
    favicon:"/408_favicon.ico",
    logo: "/assets/408_logo.png",
    navbar: navbar,
    // 导航栏布局
    navbarLayout:{
      start: ["Brand"],
      center: ["Links"],
      end: ["Language","Search","Repo", "Outlook", ]
    },
    sidebar: sidebar,
    // sidebar: "heading",

    // 主题布局选项
    repo: "https://github.com/mmdapl/408CSFamily",
    logoDark:"/assets/408_logo.png",

    // 博客配置
    blog:{
      name:'测试',
      avatar:'',
      description:'',
      intro:'',
      roundAvatar:true,
      timeline:"时间轴的顶部文字",
      articleInfo:"",
      medias:{
        "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
      }
    },
    lastUpdated: true,
    lastUpdatedText: "最近更新",
    contributorsText: '贡献者',
    notFound: ['宝贝不要急，我努力更新就会慢慢有的哟...想要什么，也欢迎微信后台私信！'],// 自定义404页面提示语，数组
    backToHome: '返回首页', // 返回首页

    sidebarDepth: 1,
    editLink: false,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    search: true,
    searchMaxSuggestions: 10,
    plugins: {
      // 开启博客功能
      blog:true,
      // 代码块
      mdEnhance: {
        codetabs: true,
      },
      copyCode: {
        showInMobile:true
      },
    },
  }),
  // 插件配置
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
};