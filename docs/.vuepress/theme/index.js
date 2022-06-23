/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-24 08:37:12
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 08:37:13
 */
const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
}