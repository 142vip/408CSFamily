import type { ThemeLocaleData } from 'vuepress-theme-hope'
import type { SearchProLocaleData } from 'vuepress-plugin-search-pro'
import { NotFoundMsgList } from './constants'

/**
 * 支持中文
 * 参考：https://theme-hope.vuejs.press/zh/config/i18n.html
 */
const themeLocalCN: ThemeLocaleData = {
  lang: 'zh-CN',

  navbarLocales: {
    langName: '简体中文',
    selectLangAriaLabel: '选择语言',
  },

  metaLocales: {
    author: '作者',
    date: '写作日期',
    origin: '原创',
    views: '访问量',
    category: '分类',
    tag: '标签',
    readingTime: '阅读时间',
    words: '字数',
    toc: '此页包含',
    prev: '上一页',
    next: '下一页',
    lastUpdated: '上次编辑于',
    contributors: '贡献者',
    editLink: '编辑此页',
    print: '打印',
  },

  blogLocales: {
    article: '文章',
    articleList: '文章列表',
    category: '分类',
    tag: '标签',
    timeline: '时间轴',
    timelineTitle: '昨日不在',
    all: '全部',
    intro: '个人介绍',
    star: '星标',
    empty: '$text 为空',
  },

  paginationLocales: {
    prev: '上一页',
    next: '下一页',
    navigate: '跳转到',
    action: '前往',
    errorText: '请输入 1 到 $page 之前的页码！',
  },

  outlookLocales: {
    themeColor: '主题色',
    darkmode: '外观',
    fullscreen: '全屏',
  },

  encryptLocales: {
    iconLabel: '文章已加密',
    placeholder: '输入密码',
    remember: '记住密码',
    errorHint: '请输入正确的密码',
  },

  routeLocales: {
    skipToContent: '跳至主要內容',
    notFoundTitle: '页面不存在',
    notFoundMsg: NotFoundMsgList,
    back: '返回上一页',
    home: '进入首页',
  },
}

/**
 *   自定义语言，支持文案
 */
export const i18n = {
  '/': themeLocalCN,
}

/**
 * 搜索框支持中文
 * 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
 */
export const searchProCNLocals: SearchProLocaleData = {
  placeholder: '请输入需要搜索的关键字',
  search: '搜索文档',
  searching: '搜索中',
  cancel: '取消',
  select: '选择',
  navigate: '切换',
  exit: '关闭',
  loading: '正在努力搜索中...',
  queryHistory: '搜素文字历史',
  resultHistory: '搜索结果',
  emptyHistory: '没有搜索历史',
  emptyResult: '无法找到相关结果',
  defaultTitle: '搜索文档',
  autocomplete: '自动补齐',
}
