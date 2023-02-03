module.exports = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: "算法恶补",
    children: [{
      text: '习题练手',
      link: '/algorithm/topic_practice'
    }, {
      text: '刷题笔记',
      link: '/algorithm/algorithm_note'
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
    link: "/ds/basic_introduction"
  },
  {
    text: "操作系统",
    link: "/os/"
  },
  {
    text: "计算机组成原理",
    link: "/ccp/"
  },

  {
    text: "计算机网络",
    link: "/cn/"
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
        link: '/note-map/ds-map'
      }, {
        text: '操作系统',
        link: '/note-map/os-map'
      }, {
        text: '计算机组成原理',
        link: '/note-map/ccp-map'
      }, {
        text: '计算机网络',
        link: '/note-map/cn-map'
      }]
    }]
  },
  {
    text: "大事记",
    link: "/big-event-history"
  },
];
