import { fileURLToPath } from 'node:url'
import {
  getDocSiteBase,
  OPEN_SOURCE_ADDRESS,
  OPEN_SOURCE_AUTHOR,
} from '@142vip/utils'
import {
  FamilyHeaders,
  getCopyRightText,
  getFooterHtml,
  getThemeConfig,
  getViteBundler,
} from '@142vip/vuepress'
import viteBundler from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import { path } from '@vuepress/utils'
import { hopeTheme } from 'vuepress-theme-hope'
import { navbarConfig, sidebarConfig } from './docs/theme.config'
import pkg from './package.json'

/**
 * 用户自定义配置
 * 注意：
 *  - 环境变量中的PROXY_DOMAIN字段，用于区分是否nginx代理
 */
export default defineUserConfig({
  base: getDocSiteBase(pkg.name),
  title: '计算机408全家桶',
  description: '磨刀不误砍柴工，读完硕士再打工',
  port: 4200,
  source: '',
  head: FamilyHeaders,
  markdown: {
    // todo 引入代码文件时的路径替换
    importCode: {
      handleImportPath: (str) => {
        const __dirname = path.dirname(fileURLToPath(import.meta.url))
        if (str.includes('@code')) {
          return str.replace(/^@code/, path.resolve(__dirname, '../../code/'))
        }
        if (str.includes('@ds')) {
          return str.replace(/^@ds/, path.resolve(__dirname, '../../code/ds/'))
        }
        if (str.includes('~')) {
          return str.replace(/^~/, path.resolve(__dirname, '../../'))
        }
        return str
      },
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: hopeTheme({
    ...getThemeConfig({
      // 导航栏
      navbar: navbarConfig,
      // 侧边栏
      sidebar: sidebarConfig,
      navbarLayout: {
        start: ['Brand'],
        center: ['Links'],
        end: ['Language', 'Outlook', 'Repo', 'Search'],
      },
      favicon: '/408_favicon.ico',
      logo: '/408_logo.png',
      logoDark: '/408_logo.png',
      hostname: 'https://408.142vip.cn',
      // 页脚
      footer: getFooterHtml({
        name: pkg.name,
        version: pkg.version,
      }),
      // 版权
      copyright: getCopyRightText(OPEN_SOURCE_AUTHOR.name),
      // 仓库
      repo: '142vip/408CSFamily',
      repoLabel: 'GitHub',

      // 作者信息
      author: OPEN_SOURCE_AUTHOR,

      // 文档路径，开启编辑功能
      docsDir: 'docs',
      docsBranch: 'next',
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
      },
    }),
  }),
  bundler: viteBundler(getViteBundler()),
  shouldPrefetch: false,
})
