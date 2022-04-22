export const themeData = {
  "logo": "/assets/fight_favicon.ico",
  "darkMode": false,
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "恶补算法",
      "children": [
        {
          "text": "课本习题",
          "link": "/"
        },
        {
          "text": "刷题笔记",
          "link": "/todo"
        },
        {
          "text": "在线刷题",
          "children": [
            {
              "text": "杭电OJ",
              "link": "http://acm.hdu.edu.cn/"
            },
            {
              "text": "牛客网",
              "link": "https://www.nowcoder.com/"
            },
            {
              "text": "LeetCode",
              "link": "https://leetcode-cn.com/"
            }
          ]
        }
      ]
    },
    {
      "text": "数据结构",
      "link": "/DS/"
    },
    {
      "text": "操作系统",
      "link": "/OS/"
    },
    {
      "text": "计算机组成原理",
      "link": "/CCP/"
    },
    {
      "text": "计算机网络",
      "link": "/CN/"
    },
    {
      "text": "其他资料",
      "children": [
        {
          "text": "考研相关",
          "children": [
            {
              "text": "111",
              "link": "/333"
            }
          ]
        },
        {
          "text": "思维导图",
          "children": [
            {
              "text": "数据结构",
              "link": "/NoteMap/DS_Map"
            },
            {
              "text": "操作系统",
              "link": "/NoteMap/OS_Map"
            },
            {
              "text": "计组",
              "link": "/NoteMap/CCP_Map"
            },
            {
              "text": "计算机网络",
              "link": "/NoteMap/CN_Map"
            }
          ]
        }
      ]
    },
    {
      "text": "大事记",
      "link": "/Big_Event_History/"
    }
  ],
  "sidebar": {
    "/DS/": [
      "basic_introduction",
      "linear_table"
    ]
  },
  "smoothScroll": true,
  "lastUpdated": true,
  "lastUpdatedText": "最近更新",
  "contributorsText": "贡献者",
  "notFound": [
    "宝贝不要急，我努力更新就会慢慢有的哟...想要什么，也欢迎微信后台私信哟！"
  ],
  "backToHome": "返回首页",
  "repo": "https://github.com/mmdapl/408CSFamily",
  "editLink": false,
  "displayAllHeaders": true,
  "search": true,
  "searchMaxSuggestions": 10,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "contributors": true,
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
