import type {
  DocsSidebarConfig,
  DocsSidebarGroup,
  DocsSidebarItem,
} from '@142vip/vuepress'
import type { AutoLinkOptions, SidebarItemOptions } from 'vuepress-theme-hope'
import { VipNodeJS } from '@142vip/utils'

function readPermalink(mdFilePath: string): string | null {
  if (!VipNodeJS.existPath(mdFilePath)) {
    return null
  }

  for (const line of VipNodeJS.readFileToStrByUTF8(mdFilePath).split('\n')) {
    if (line.startsWith('permalink:')) {
      return line.slice('permalink:'.length).trim()
    }
  }

  return null
}

function resolveMdLink(
  link: string,
  docsBasePath: string,
  groupPrefix: string,
): string {
  const mdRelativePath = groupPrefix
    ? `${groupPrefix}/${link}`
    : link
  const permalink = readPermalink(
    VipNodeJS.pathJoin(VipNodeJS.getProcessCwd(), 'docs', docsBasePath, mdRelativePath),
  )

  return permalink ?? link
}

/**
 * Hope 手动 sidebar 的 `.md` 链接按「prefix + 文件名」推断路由，**不会**读取 frontmatter `permalink`。
 * 本仓库页面 permalink 与文件名不一致时，在配置阶段按文件解析并替换 `link`。
 *
 * 侧栏结构类型见 `@142vip/vuepress` 的 `DocsSidebar*`；本函数为站点侧解析工具。
 *
 * @param sidebar 模块侧边栏原始配置（可含 `.md` 链接）
 * @param docsBasePath `docs/` 下的相对目录，如 `ds`、`os`
 */
export function resolveSidebarPermalinks(
  sidebar: DocsSidebarConfig,
  docsBasePath: string,
): SidebarItemOptions[] {
  const walk = (items: DocsSidebarItem[], groupPrefix = ''): SidebarItemOptions[] =>
    items.map((item) => {
      if (Array.isArray((item as DocsSidebarGroup).children)) {
        const group = item as DocsSidebarGroup
        return {
          ...group,
          children: walk(group.children, group.prefix ?? ''),
        }
      }

      if (!item.link?.endsWith('.md')) {
        return item as AutoLinkOptions
      }

      return {
        ...item,
        link: resolveMdLink(item.link, docsBasePath, groupPrefix),
      }
    })

  return walk(sidebar)
}
