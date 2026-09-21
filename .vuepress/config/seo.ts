import type { UserConfig } from '@vuepress/cli'
import { OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { VipNodeJS } from '@142vip/utils'
import {
  homeUrl,
  siteDescription,
  siteLogo,
  siteLogoUrl,
  siteTitle,
} from './site'

/** 408 考研相关 SEO 关键词 */
const siteKeywords = [
  '408',
  '计算机考研',
  '408专业课',
  '数据结构',
  '操作系统',
  '计算机组成原理',
  '计算机网络',
  '考研笔记',
  '计算机基础',
  '面试八股',
].join(', ')

/**
 * SEO 相关 head 标签（关键词、Open Graph、Twitter Card 等）
 */
export const seoHead: NonNullable<UserConfig['head']> = [
  ['meta', { name: 'description', content: siteDescription }],
  ['meta', { name: 'keywords', content: siteKeywords }],
  ['meta', { name: 'author', content: OPEN_SOURCE_AUTHOR.name }],
  ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large' }],
  ['meta', { name: 'googlebot', content: 'index,follow' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:site_name', content: siteTitle }],
  ['meta', { property: 'og:title', content: siteTitle }],
  ['meta', { property: 'og:description', content: siteDescription }],
  ['meta', { property: 'og:url', content: homeUrl }],
  ['meta', { property: 'og:image', content: siteLogoUrl }],
  ['meta', { property: 'og:locale', content: 'zh_CN' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:title', content: siteTitle }],
  ['meta', { name: 'twitter:description', content: siteDescription }],
  ['meta', { name: 'twitter:image', content: siteLogoUrl }],
  ['link', { rel: 'canonical', href: homeUrl }],
]

/**
 * 站点 head 配置
 * - `seoHead`：搜索引擎与社交平台元信息
 * - `favicon` / `apple-touch-icon`：见 `.vuepress/public/`
 * - Vercel 统计：仅 Vercel 构建注入
 * - 百度统计
 */
export const siteHead: NonNullable<UserConfig['head']> = [
  ...seoHead,
  ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ['link', { rel: 'apple-touch-icon', href: siteLogo }],
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

if (VipNodeJS.getProcessEnv('VERCEL') === '1') {
  siteHead.push(['script', { type: 'text/javascript', src: '/_vercel/insights/script.js' }])
}
