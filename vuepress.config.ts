import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { defineUserConfig } from '@vuepress/cli'
import { path } from '@vuepress/utils'
import viteBundler from '@vuepress/bundler-vite'
import { name } from './package.json'
import themeConfig from './docs/.vuepress/theme/theme'
import { headers } from './docs/.vuepress/theme/headers'

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
  source: '',
  head: headers,
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
  // ...pluginsConfig,
  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 4096,
      },
    },
    vuePluginOptions: {},
  }),
  shouldPrefetch: false,
})
