import { hopeTheme } from "vuepress-theme-hope";

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
    hostname:'https://408.142vip.cn',
    author:{
      name:'ChuFan',
      email:'fairy_408@2925.com',
      url:'https://www.142vip.cn'
    },
    favicon:"/408_favicon.ico",
    logo: "/assets/408_logo.png",
    navbar: require("./config/navbar/index"),  // 注意这个关键字有所改变
    sidebar: require("./config/sidebar/index"),

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
      // articleInfo:"",
      // medias:{
      //   "BiliBili": "哔哩哔哩"
      // }
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
      // blog:true,
      // 代码块
      mdEnhance: {
        codetabs: true,
      },
    },
  }),
  // plugins: [
  //   // 全文搜索 参考配置：https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/config.ts
  //   ['@vuepress/docsearch',
  //     {
  //       apiKey: '<API_KEY>',
  //       indexName: '<INDEX_NAME>',
  //       locales: {
  //         '/': {
  //           placeholder: '搜索一下',
  //           translations: {
  //             button: {
  //               buttonText: '搜索一下',
  //               buttonAriaLabel: '搜索一下',
  //             },
  //             modal: {
  //               searchBox: {
  //                 resetButtonTitle: '清除查询条件',
  //                 resetButtonAriaLabel: '清除查询条件',
  //                 cancelButtonText: '取消',
  //                 cancelButtonAriaLabel: '取消'
  //               },
  //               startScreen: {
  //                 recentSearchesTitle: '搜索历史',
  //                 noRecentSearchesText: '没有搜索历史',
  //                 saveRecentSearchButtonTitle: '保存至搜索历史',
  //                 removeRecentSearchButtonTitle: '从搜索历史中移除',
  //                 favoriteSearchesTitle: '收藏',
  //                 removeFavoriteSearchButtonTitle: '从收藏中移除',
  //               },
  //               errorScreen: {
  //                 titleText: '无法获取结果',
  //                 helpText: '你可能需要检查你的网络连接',
  //               },
  //               footer: {
  //                 selectText: '查询',
  //                 selectKeyAriaLabel: 'Enter key',
  //                 navigateText: '切换',
  //                 navigateUpKeyAriaLabel: 'Arrow up',
  //                 navigateDownKeyAriaLabel: 'Arrow down',
  //                 closeText: '关闭',
  //                 closeKeyAriaLabel: 'Escape key',
  //                 searchByText: '技术支持',
  //               },
  //               noResultsScreen: {
  //                 noResultsText: '无法找到相关结果',
  //                 suggestedQueryText: '你可以尝试查询',
  //                 openIssueText: '你认为该查询应该有结果？',
  //                 openIssueLinkText: '点击反馈',
  //               },
  //             },
  //           }
  //         }
  //       }
  //     }],
  //   // other plugins
  //   // [
  //   //   // 本地全文搜索
  //   //   '@vuepress/plugin-search',
  //   //   {
  //   //     locales: {
  //   //       '/': {
  //   //         placeholder: '搜索',
  //   //       },
  //   //       '/zh/': {
  //   //         placeholder: '搜索',
  //   //       },
  //   //     },
  //   //     maxSuggestions: 10 // 显示最大搜索
  //   //   },
  //   // ],
  // ]
};