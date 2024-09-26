/**
 * 导航栏配置
 */
export const navbar = [
  {
    text: '🌐 首页',
    link: '/',
  },
  {
    text: '📙 数据结构',
    link: '/ds/',
  },
  {
    text: '📕 操作系统',
    link: '/os/',
  },
  {
    text: '📘 计算机组成原理',
    link: '/ccp/',
  },

  {
    text: '📗 计算机网络',
    link: '/cn/',
  },
  {
    text: '🧠 思维导图',
    link: '/mark-map/ds-map.html',
  },
  {
    text: '👉 了解更多',
    children: [
      {
        text: '📄 更新日志',
        link: '/changelog.md',
      },
      {
        text: '📣 网站动态',
        link: '/big-event-history.md',
      },
      {
        text: '自媒体',
        children: [
          {
            text: '💥 公众号文章',
            link: '/wechat-list.md',
          },
        ],
      },
      {
        text: '外链',
        children: [
          // {
          //   text: '常用网站',
          //   link: '/frequent-site-link.md'
          // },
          {
            text: '🎯 开发计划',
            link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnpso8R4vCid01wmg66hFjae',
          },
        ],
      },
    ],
  },
]
