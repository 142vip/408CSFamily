/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-19 08:04:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 08:25:28
 */

module.exports = [
  // {
  //   text: "考研规划",
  //   link: "/DS1/"
  // },
  {
    text: '首页',
    link: '/'
  },
  {
    text: "恶补算法",
    children: [{
      text: '习题练手',
      link: '/Algorithm/topic_practice'
    }, {
      text: '刷题笔记',
      link: '/Algorithm/algorithm_note'
    }, {
      text: '在线刷题',
      children: [{
        text: '杭电OJ', link: 'http://acm.hdu.edu.cn/'
      },
      {
        text: '牛客网', link: 'https://www.nowcoder.com/'
      }, {
        text: 'LeetCode', link: 'https://leetcode-cn.com/'
      }]
    }]
  },
  {
    text: "数据结构",
    link: "/DS/basic_introduction"
  },
  {
    text: "操作系统",
    link: "/OS/"
  },
  {
    text: "计算机组成原理",
    link: "/CCP/"
  },

  {
    text: "计算机网络",
    link: "/CN/"
  }, {
    text: '其他资料',
    children: [{
      text: '考研相关',
      children: [{
        text: '111',
        link: '/333'
      }]
    }, {
      text: "思维导图",
      children: [{
        text: '数据结构',
        link: '/NoteMap/DS_Map'
      }, {
        text: '操作系统',
        link: '/NoteMap/OS_Map'
      }, {
        text: '计算机组成原理',
        link: '/NoteMap/CCP_Map'
      }, {
        text: '计算机网络',
        link: '/NoteMap/CN_Map'
      }]
    }]
  },
  {
    text: "大事记",
    link: "/Big_Event_History/"
  },

];
