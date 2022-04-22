export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "计算机应试全家桶",
  "description": "磨刀不误砍柴工，读完硕士再打工",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/assets/fight_favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
