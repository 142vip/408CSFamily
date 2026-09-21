import type { UserConfig } from '@vuepress/cli'
import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { vipDocSite, VipNodeJS, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * 站点 head 配置
 * - Vercel 统计：仅 Vercel 构建注入（`/_vercel/insights/script.js` 仅该平台托管时存在）
 * - 百度统计
 */
const siteHead: NonNullable<UserConfig['head']> = [
  ['link', { rel: 'icon', href: 'favicon.ico' }],
  [
    'script',
    {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],
]

// vercel 统计
if (VipNodeJS.getProcessEnv('VERCEL') === '1') {
  siteHead.push(['script', { type: 'text/javascript', src: '/_vercel/insights/script.js' }])
}

/**
 * 页脚
 */
const footerHtmlStr = `
<div>
    All Rights Reserved
    <a href="${OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP}" target="_blank">@${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}</a> | 
    <strong>${pkg.name}@v${pkg.version} </strong>
</div>
<div style="margin-top: 5px">
  <a href="${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_NAME}</a> 
  <span style="margin: 0 5px;">|</span>
  <a href="${OPEN_SOURCE_ADDRESS.BEI_AN_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BEI_AN_NAME}</a>
</div>
`

/**
 * 版权信息
 */
const copyrightHtmlStr = `
<strong>MIT 协议</strong> | 版权所有 © 2015-${new Date().getFullYear()} ${OPEN_SOURCE_AUTHOR.name}
<div style="margin-top: 10px">
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_GITHUB}"
      target="_blank"
      style="padding: 5px"
    >
        <!--src="https://img.shields.io/github/deployments/142vip/408CSFamily/github-pages?label=github&logo=github" -->
        <img
          alt="408CSFamily Deploy In Github Pages"
          src="https://img.shields.io/badge/github-success-green?logo=github&color=bef9c6"
        >
    </a>
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_NETLIFY}"
      target="_blank"
      style="padding: 5px"
    >
        <!--src="https://api.netlify.com/api/v1/badges/75a7251a-f873-4aff-b387-6449ca241ef7/deploy-status" -->
        <img
          alt="408CSFamily Deploy In Netlify"
          src="https://img.shields.io/badge/netlify-success-green?logo=netlify&color=bef9c6"
        >
    </a>
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_VERCEL}"
      target="_blank"
      style="padding: 5px"
    >
        <!--src="https://deploy-badge.vercel.app/vercel/408-family" -->
        <img
          src="https://img.shields.io/badge/vercel-success-green?logo=vercel&color=bef9c6"
          alt="408CSFamily Deploy In Vercel"
        >
    </a>
</div>
`

/**
 * 用户自定义配置
 * 注意：
 *  - 环境变量 NEED_PROXY=true 时，base 为 /{pkg.name}/，否则为 /
 *  - locales / lang / bundler / favicon 等由 defineVipVuepressConfig 默认注入
 */
export default defineVipVuepressConfig({
  base: vipDocSite.getBase(pkg.name),
  title: '计算机408全家桶',
  description: '磨刀不误砍柴工，读完硕士再打工',
  port: 4200,
  source: '',
  head: siteHead,
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
