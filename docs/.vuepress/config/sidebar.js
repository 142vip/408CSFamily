/*
 * @Description: 测试
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-19 08:04:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-23 23:58:24
 */
module.exports = {
  // "/category/": require("../../category/sidebar_contents"),
  // "/DataStructure/": require("../../category/sidebar_contents"),
  "/DS": require("../../DS/sidebar_contents"),
  "/OS": [
    {
      text: 'VuePress Reference',
      collapsible: true,
      children: ['/reference/cli.md', '/reference/config.md'],
    },
    {
      text: 'Bundlers Reference',
      collapsible: true,
      children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    },
  ],

};
