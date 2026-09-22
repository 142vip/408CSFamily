import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { cppSidebar } from '../../docs/ccp/cpp.sidebar'
import { cnSidebar } from '../../docs/cn/cn.sidebar'
import { dsSidebar } from '../../docs/ds/ds.sidebar'
import { osSidebar } from '../../docs/os/os.sidebar'
import { resolveSidebarPermalinks } from './sidebar.resolve'

/** 顶部导航栏 */
export const navbarConfig = defineVipNavbarConfig([
  { text: '🔥 首页', link: '/' },
  { text: '📙 数据结构', link: '/ds/' },
  { text: '📕 操作系统', link: '/os/' },
  { text: '📘 计算机组成原理', link: '/ccp/' },
  { text: '📗 计算机网络', link: '/cn/' },
  {
    text: '👉 了解更多',
    children: [
      { text: '📄 变更记录', link: '/changelog.md' },
      { text: '📣 网站动态', link: '/big-event-history.md' },
      {
        text: '自媒体',
        children: [
          { text: '💥 公众号文章', link: '/wechat-list.md' },
        ],
      },
      {
        text: '外链',
        children: [
          { text: '🎯 开发计划', link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnCSIIgL5Tg2PUpKWwiQnr6g' },
        ],
      },
    ],
  },
])

/**
 * 各学科侧边栏
 * - 路径键与 Hope 路由前缀一致
 * - `.md` 链接通过 `resolveSidebarPermalinks` 自动对齐 frontmatter `permalink`
 */
export const sidebarConfig = defineVipSidebarConfig({
  '/ds': resolveSidebarPermalinks(dsSidebar, 'ds'),
  '/os': resolveSidebarPermalinks(osSidebar, 'os'),
  '/ccp': resolveSidebarPermalinks(cppSidebar, 'ccp'),
  '/cn': resolveSidebarPermalinks(cnSidebar, 'cn'),
})
