/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-24 08:15:07
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 08:17:32
 */

/*
 * @Description: 配置左侧菜单栏
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-12 07:37:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 08:08:47
 */


module.exports = [
  // 'basic_introduction',
  // 'linear_table',
  {
    text: '基础入门',
    link: "/DS/basic_introduction",
    collapsible: false,
    children: [{
      text: '1.1 基本概念',
      link: '/DS/basic_introduction/1.basic_concepts.md'
    }, {
      text: '1.2 数据结构三要素',
      link: '/DS/basic_introduction/2.three_elements_of_data_structure.md'
    }, {
      text: '1.3 算法和算法评价',
      link: '/DS/basic_introduction/3.algorithm_and_algorithm_evaluation.md'
    }],
  }]