import { getDocSiteBase, GitGeneralBranch, OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  FamilyHeaders,
  getCopyRightText,
  getFooterHtml,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * 用户自定义配置
 * 注意：
 *  - 环境变量中的PROXY_DOMAIN字段，用于区分是否nginx代理
 */
export default defineVipVuepressConfig({
  base: getDocSiteBase(pkg.name),
  title: '计算机408全家桶',
  description: '磨刀不误砍柴工，读完硕士再打工',
  port: 4200,
  source: '',
  head: FamilyHeaders,
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
    logo: '/logo.png',
    logoDark: '/logo.png',
    // todo 拓展OPEN_SOURCE_AUTHOR
    hostname: 'https://408.142vip.cn',
    // 页脚
    footer: getFooterHtml({
      name: pkg.name,
      version: pkg.version,
    }),
    // 版权
    copyright: getCopyRightText(OPEN_SOURCE_AUTHOR.name),
    // 仓库 142vip/408CSFamily
    repo: `${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}/${pkg.name}`,
    repoLabel: 'GitHub',

    // 作者信息
    author: OPEN_SOURCE_AUTHOR,

    // 文档路径，开启编辑功能
    docsDir: 'docs',
    docsBranch: GitGeneralBranch.NEXT,
    // 主题布局选项
    docsRepo: OPEN_SOURCE_ADDRESS.GITHUB_REPO_408,

    // 插件
    plugins: {
      // 水印
      watermark: {
        enabled: false,
        watermarkOptions: {
          content: OPEN_SOURCE_AUTHOR.name,
        },
      },
      git: true,
    },
  }),
  shouldPrefetch: false,
})
