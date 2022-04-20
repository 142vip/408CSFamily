/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-19 08:04:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-20 09:31:56
 */
module.exports = {
  title: "计算机应试全家桶",
  description: "磨刀不误砍柴工，读完硕士再打工",
  base: "/408CSFamily/",
  port: 4200,
  // head: [
  //   ["link",{ rel: "icon",href: "/assets/fight_favicon.ico" }]
  // ],
  head: [
    ["link", { rel: "icon", href: "/assets/fight_favicon.ico" }]
  ],
  themeConfig: {
    logo: "/assets/fight_favicon.ico",
    darkMode: false, // 禁用夜色
    navbar: require("./config/navbar"),  // 注意这个关键字有所改变
    sidebar: require("./config/sidebar"),
    smoothScroll: true,
    lastUpdated: true,
    lastUpdatedText: "最近更新",
    contributorsText: '贡献者',
    notFound: ['not exist'],// 自定义404页面提示语，数组
    backToHome: '返回首页', // 返回首页
    repo: "https://github.com/mmdapl/JavaScriptCollection",
    
    editLink: false,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    displayAllHeaders: true,// 默认值：false 显示所有页面的标题链接
    search: true,
    searchMaxSuggestions: 10,
  },
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