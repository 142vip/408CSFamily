/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-19 08:04:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-09 00:23:18
 */
module.exports = {
  theme:"antdocs",
  // theme:"vdoing",  // 测试主题
  title: "计算机应试全家桶",
  description: "磨刀不误砍柴工，读完硕士再打工",
  base: "/408CSFamily/",
  head: [
    ["link",{ rel: "icon",href: "/assets/408_favicon.ico" }]
  ],
  markdown: {
    lineNumbers: true, // 显示行号
    // extractHeaders:['h2','h3'],// 左侧标签级别
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最近更新",
    repo: "https://github.com/mmdapl",
    editLinks: false,
    backToTop: true,
    sidebarDepth: 1,
    // sidebar: 'auto',// 自动生成侧栏
    displayAllHeaders: false, // 默认值：false
    searchMaxSuggestions: 10,// 搜索框显示的搜索结果数量
    ads:{
      style: 2, 
      // speed: 2000,
      image: 'https://cdn.jsdelivr.net/gh/lir0115/images@main/qr_code/gongzhonghao.jpg',
      text: '来公众号交个朋友吧~',
      link: 'https://space.bilibili.com/350937042',

    }
  },
  // 插件
  plugins: [
    // 全文搜索
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
};