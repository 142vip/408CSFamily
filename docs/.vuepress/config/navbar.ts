/**
 * 导航栏配置
 */
export const navbar = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: "数据结构",
    link: "/manuscripts/ds"
  },
  {
    text: "操作系统",
    link: "/manuscripts/os"
  },
  {
    text: "计算机组成原理",
    link: "/manuscripts/ccp"
  },

  {
    text: "计算机网络",
    link: "/manuscripts/cn"
  },
  {
    text: '思维导图',
    link: "/manuscripts/mark-map",
  },
  {
    text: "了解更多",
    children: [
      {
        text: '变更记录',
        link: '/manuscripts/changelog.md'
      },
      {
        text: '网站动态',
        link: '/manuscripts/big-event-history.md'
      },
      {
        text: "自媒体",
        children: [
          {
            text: "公众号文章",
            link: "/manuscripts/wechat-list.md"
          },
        ]
      },
      {
        text: "外链",
        children: [
          // {
          //   text: '常用网站',
          //   link: '/manuscripts/frequent-site-link.md'
          // },
          {
            text: "RoadMap计划",
            link: "https://142vip-cn.feishu.cn/share/base/view/shrcnpso8R4vCid01wmg66hFjae"
          }
        ]
      },
    ],
  },
];
