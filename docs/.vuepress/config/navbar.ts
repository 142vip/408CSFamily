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
    link: "/manuscripts/note-map"
  },
  {
    text: "网站",
    children: [
      "/big-event-history",
      "/changelog"
    ]
  },
];
