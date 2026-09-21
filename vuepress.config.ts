import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'
import {
  copyrightHtmlStr,
  footerHtmlStr,
  navbarConfig,
  pkg,
  sidebarConfig,
  siteBase,
  siteDescription,
  siteHead,
  siteLogo,
  sitePathsPlugin,
  siteTitle,
} from './.vuepress/config'

/**
 * VuePress 站点配置
 *
 * 注意：
 * - 环境变量 `NEED_PROXY=true` 时，base 为 `/{pkg.name}/`，否则为 `/`
 * - `locales` / `lang` / `bundler` 等由 `defineVipVuepressConfig` 默认注入
 * - 导航、SEO、页脚等拆分见 `.vuepress/config/`
 */
export default defineVipVuepressConfig({
  base: siteBase,
  title: siteTitle,
  description: siteDescription,
  port: 4200,
  pagePatterns: [
    'docs/**/*.md',
    '!node_modules',
    '!.vuepress',
    '!code/**',
  ],
  head: siteHead,
  plugins: [
    sitePathsPlugin(),
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
    hostname: OPEN_SOURCE_ADDRESS.HOME_PAGE_DOMAIN_408,
    // 页脚
    footer: footerHtmlStr,
    // 版权
    copyright: copyrightHtmlStr,
    // 仓库 142vip/408CSFamily
    repo: `${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}/${pkg.name}`,
    // 作者信息
    author: OPEN_SOURCE_AUTHOR,
    // 主题布局选项
    docsRepo: OPEN_SOURCE_ADDRESS.GITHUB_REPO_408,
    contributors: true,
    // 插件
    plugins: {
      // 水印
      watermark: {
        enabled: false,
        watermarkOptions: {
          content: OPEN_SOURCE_AUTHOR.name,
        },
      },
    },
  }),
}, {
  // 浏览器控制台打印版本与构建时间
  appBuildLog: { version: pkg.version },
})
