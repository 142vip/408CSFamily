import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import { name } from '../../package.json'
import themeConfig from './config/theme.config'
import pluginsConfig from './config/plugins.config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * 用于区分base路径，是否nginx代理
 */
function getSiteBase(): '/' | `/${string}/` {
  // 用于区分base路径，是否nginx代理
  const needProxy = process.env.NEED_PROXY || false
  return needProxy ? `/${name}/` : '/'
}

/**
 * 用户自定义配置
 * 注意：
 *  - 环境变量中的PROXY_DOMAIN字段，用于区分是否nginx代理
 */
export default defineUserConfig({
  title: '计算机408全家桶',
  description: '磨刀不误砍柴工，读完硕士再打工',
  // 用于区分base路径，是否nginx代理
  base: getSiteBase(),
  port: 4200,
  head: [
    // vercel统计 相关配置
    [
      'script',
      { type: 'text/javascript', src: '/_vercel/insights/script.js' },
    ],
    [
      'link',
      { rel: 'icon', href: '/408_favicon.ico' },
    ],
    // 百度统计
    [
      'script',
      {},
      `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();`,
    ],
  ],
  // 配置永久链接，参考：https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#permalink
  // permalink: "/:year/:month/:day/:slug",
  // permalinkPattern: `:slug.html`,
  markdown: {
    // todo 引入代码文件时的路径替换
    importCode: {
      handleImportPath: (str) => {
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
    // md doc formatter  headerDepth
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  ...themeConfig,
  // 插件配置
  ...pluginsConfig,
  shouldPrefetch: false,
})
