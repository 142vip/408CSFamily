// 参考：<https://github.com/updownpress/markdown-lint/tree/master/rules>
module.exports = {
  "default": true,
  "MD001": false,
  "MD003": {
    "style": "atx"
  },
  "MD004": {
    "style": "dash"
  },
  "MD013": false,
  "MD024": {
    "allow_different_nesting": true
  },
  "MD025": {
    "front_matter_title": ""
  },
  "MD033": {
    "allowed_elements": [
      "br",
      "template",
      "script",
      "style",
      "ArtPlayer",
      "AudioPlayer",
      "AutoCatalog",
      "Badge",
      "BiliBili",
      "Catalog",
      "CodePen",
      "DemoProject",
      "FontIcon",
      "HighlightPanel",
      "ProjectLink",
      "PDF",
      "Replit",
      "Share",
      "SiteInfo",
      "StackBlitz",
      "XiGua",
      "VidStack",
      "VideoPlayer",
      "YouTube",
      "AppearanceSwitch",
      "HopeIcon",
      "FlowChartPlayground",
      "IconDisplay",
      "KatexPlayground",
      "PrintButton",
      "ThemeColorPicker",
      "ToggleFullScreenButton",
      "ToggleRTLButton",
      "div",
      "a",
      "p",
      "img",
      "table",
      "strong",
      "sub"
    ]
  },
  "MD035": {
    "style": "---"
  },
  "MD036": false,
  "MD040": false,
  "MD045": false,
  "MD041": false,
  "MD042": false,
  "MD046": false,
  "MD049": false
}
