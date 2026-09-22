import {
  copyrightHtmlStr,
  footerHtmlStr,
  navbarConfig,
  pkg,
  sidebarConfig,
  siteBase,
  siteDescription,
  siteDevPort,
  siteHead,
  siteLogo,
  siteOrigin,
  siteTitle,
} from '.vuepress/config'
import {
  OPEN_SOURCE_ADDRESS,
  OPEN_SOURCE_AUTHOR,
} from '@142vip/open-source'
import {
  createVipViteBuildPlugin,
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'

/**
 * VuePress 站点配置
 *
 * 对齐 `@142vip/vuepress`（见 core-x `packages/vuepress`）：
 * - `locales` / `lang` / `bundler` 由 `defineVipVuepressConfig` 默认注入
 * - `author` / `docsDir` / `docsBranch` / `contributors` 由 `getVipHopeTheme` 默认注入
 * - 大文档站 chunk 告警用包内 `createVipViteBuildPlugin`
 * - 文档路由依赖各 md 的 frontmatter `permalink`
 * - 侧边栏 `.md` 链接经 `resolveSidebarPermalinks` 对齐 permalink
 */
export default defineVipVuepressConfig({
  base: siteBase,
  title: siteTitle,
  description: siteDescription,
  port: siteDevPort,
  pagePatterns: [
    'docs/**/*.md',
    '!node_modules',
    '!.vuepress',
    '!code/**',
  ],
  head: siteHead,
  plugins: [
    createVipViteBuildPlugin(),
  ],
  markdown: {
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code'],
        ['@ds', 'code/ds'],
        ['~', ''],
      ]),
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: getVipHopeTheme({
    // 导航栏
    navbar: navbarConfig,
    // 侧边栏
    sidebar: sidebarConfig,
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Language', 'Outlook', 'Repo', 'Search'],
    },
    logo: siteLogo,
    hostname: siteOrigin,
    // 页脚
    footer: footerHtmlStr,
    // 版权
    copyright: copyrightHtmlStr,
    repo: `${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}/${pkg.name}`,
    docsRepo: OPEN_SOURCE_ADDRESS.GITHUB_REPO_408,
    plugins: {
      watermark: {
        enabled: true,
        watermarkOptions: {
          content: OPEN_SOURCE_AUTHOR.name,
        },
      },
    },
  }),
}, {
  appBuildLog: { version: pkg.version },
})
