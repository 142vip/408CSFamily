import { hopeTheme } from 'vuepress-theme-hope'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { AUTHOR_INFO, FOOTER_HTML_INFO, copyright } from './constants'
import { navbar } from './navbar'
import { i18n, searchProCNLocals } from './i18n'
import { sidebar } from './sidebar'

/**
 * hope主题配置
 * 参考：https://theme-hope.vuejs.press/zh/config/
 */

export default {
  theme: hopeTheme({
    // locales: langConfig,
    locales: i18n,
    // 在深色模式和浅色模式之间切换
    darkmode: 'toggle',
    // 支持全屏
    // fullscreen: true,
    // 纯净模式
    // pure: true,
    print: false, // 打印按钮
    hostname: 'https://408.142vip.cn',
    author: AUTHOR_INFO,
    favicon: '/408_favicon.ico',
    logo: '/408_logo.png',
    logoDark: '/408_logo.png',
    navbar,
    // 导航栏布局
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Language', 'Outlook', 'Repo', 'Search'],
    },
    sidebar,

    // 主题布局选项
    repo: 'https://github.com/142vip/408CSFamily',

    // 博客配置
    // blog: {
    //   name: '凡是过往',
    //   avatar: '',
    //   description: '',
    //   intro: '',
    //   roundAvatar: true,
    //   timeline: "时间轴的顶部文字",
    //   // articleInfo:"",
    //   // sidebarDisplay:"always",
    //   medias: {
    //     "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
    //   }
    // },
    // 设置页脚
    displayFooter: true,
    footer: FOOTER_HTML_INFO,
    // copyright: false,
    copyright,
    // 主题色选择器
    themeColor: true,
    // 是否显示外部链接图标
    externalLinkIcon: false,

    plugins: {
      readingTime: {
        wordPerMinute: 100,
      },
      copyright: false,
      // 开启博客功能
      blog: false,
      // 图片增强，参考：https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html
      markdownImage: markdownImagePlugin({
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        lazyload: true,
        // 启用图片标记
        mark: true,
        // 启用图片大小
        size: true,
      }),
      // 代码块
      mdEnhance: {
        codetabs: true,
        tasklist: true, // 支持任务列表
        playground: {
          presets: ['ts', 'vue'],
        },
        // 是否启用幻灯片
        // revealjs: ['highlight', 'math', 'search', 'notes', 'zoom'],
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em') {
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended',
                }
              }
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
        // 文件导入
        include: true,
        // mermaid
        mermaid: true,
        // 自定义对齐
        align: true,
      },
      // 不自动生成README目录
      catalog: false,
      // 参考：https://theme-hope.vuejs.press/zh/guide/markdown/components.html
      components: {
        components: [
          'Badge',
          'BiliBili',
          'CodePen',
          'PDF',
          'StackBlitz',
          'VidStack',
          'Share',
          'XiGua',
        ],
      },
      searchPro: {
        // 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
        locales: {
          '/': searchProCNLocals,
        },
      },
      // 代码高亮：https://theme-hope.vuejs.press/zh/guide/feature/code-block.html
      shiki: {
        langs: ['ts', 'js', 'json', 'vue', 'json5', 'bash', 'diff', 'c', 'c++', 'dockerfile', 'nginx', 'proto', 'java', 'javascript', 'typescript'],
        // 你想要使用的主题
        themes: {
          light: 'one-light',
          dark: 'one-dark-pro',
        },
      },
      copyCode: {
        showInMobile: true,
      },
      feed: {
        json: true,
      },
    },
  }),
}
