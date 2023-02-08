import themeConfig from "./config/theme.config";
import pluginsConfig from "./config/plugins.config";


export default {
  title: "计算机应试全家桶",
  description: "磨刀不误砍柴工，读完硕士再打工",
  // base: "/408CSFamily/",
  port: 4200,
  head: [
    [
      "link", {rel: "icon", href: "/408_favicon.ico"}
    ],
    [
      // 百度统计
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  ...themeConfig,
  ...pluginsConfig
}