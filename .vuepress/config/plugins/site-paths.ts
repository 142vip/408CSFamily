import type { App, PageOptions, Plugin } from '@vuepress/core'
import { VipNodeJS } from '@142vip/utils'
import { ensureLeadingSlash, inferRoutePath } from '@vuepress/shared'

const DOCS_PREFIX = 'docs/'

/**
 * 源目录为项目根时，将 `docs/` 下的 Markdown 映射为与原 `docs` 源目录一致的路由。
 * 例如：`docs/ds/README.md` → `/ds/`，避免 URL 出现 `/docs/` 前缀。
 */
function getDocsRoutePath(filePath: string, sourceDir: string): string | null {
  const normalizedSource = `${VipNodeJS.pathResolve(sourceDir)}/`
  const normalizedFile = VipNodeJS.pathResolve(filePath)
  if (!normalizedFile.startsWith(normalizedSource)) {
    return null
  }

  const filePathRelative = normalizedFile
    .slice(normalizedSource.length)
    .replaceAll('\\', '/')
  if (!filePathRelative.startsWith(DOCS_PREFIX)) {
    return null
  }

  const routePath = filePathRelative.slice(DOCS_PREFIX.length)
  return inferRoutePath(ensureLeadingSlash(routePath))
}

export function sitePathsPlugin(): Plugin {
  return {
    name: 'vip-site-paths',
    extendsPageOptions(options: PageOptions, app: App) {
      if (options.filePath == null) {
        return
      }

      const inferredPath = getDocsRoutePath(options.filePath, app.dir.source())
      if (inferredPath == null) {
        return
      }

      if (options.frontmatter?.permalink != null) {
        return
      }

      options.frontmatter = {
        ...options.frontmatter,
        permalink: inferredPath,
      }
    },
  }
}
