import type { AutoLinkOptions, SidebarGroupOptions, SidebarItemOptions } from 'vuepress-theme-hope'
import { VipNodeJS } from '@142vip/utils'

/** 学科目录，与 `docs/` 下子目录及 sidebar 配置键一致 */
export type SidebarSubject = 'ds' | 'os' | 'ccp' | 'cn'

/** 各学科 `*.sidebar.ts` 的链接项（避免在 docs 中直接依赖 hope 类型） */
export interface SubjectSidebarLink {
  text: string
  link: string
}

/** 各学科 `*.sidebar.ts` 的分组项 */
export interface SubjectSidebarGroup {
  text: string
  prefix?: string
  collapsible?: boolean
  expanded?: boolean
  children: SubjectSidebarLink[]
}

export type SubjectSidebarConfig = SubjectSidebarGroup[]

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

function resolveSidebarLink(
  item: SubjectSidebarLink,
  subject: SidebarSubject,
  groupPrefix: string,
): AutoLinkOptions {
  if (!item.link.endsWith('.md')) {
    return item
  }

  const mdRelativePath = groupPrefix
    ? `${groupPrefix}/${item.link}`
    : item.link
  const permalink = readPermalink(
    VipNodeJS.pathJoin(VipNodeJS.getProcessCwd(), 'docs', subject, mdRelativePath),
  )

  if (permalink == null) {
    return item
  }

  return { ...item, link: permalink }
}

function resolveSidebarGroup(
  group: SubjectSidebarGroup,
  subject: SidebarSubject,
): SidebarGroupOptions {
  const groupPrefix = group.prefix ?? ''

  return {
    ...group,
    children: group.children.map(child => resolveSidebarLink(child, subject, groupPrefix)),
  }
}

/**
 * Hope 手动 sidebar 的 `.md` 链接按「prefix + 文件名」推断路由，不会读取 `permalink`。
 * 官方推荐在 `link` 中直接写 permalink；此处仅在配置阶段自动补齐，避免维护成本。
 */
export function resolveSidebarPermalinks(
  sidebar: SubjectSidebarConfig,
  subject: SidebarSubject,
): SidebarItemOptions[] {
  return sidebar.map(group => resolveSidebarGroup(group, subject))
}
