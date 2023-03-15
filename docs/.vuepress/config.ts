import pluginsConfig from "./config/plugins.config";
import themeConfig from "./config/theme.config";
import { defineUserConfig } from "vuepress";
import { fileURLToPath } from "node:url";
import { path } from "@vuepress/utils";
// @ts-ignore
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 用于区分base路径，是否nginx代理
const PROXY_DOMAIN = process.env.PROXY_DOMAIN || false;

export default defineUserConfig({
  title: "计算机应试全家桶",
  description: "磨刀不误砍柴工，读完硕士再打工",
  lang: 'zh-CN',
  base: PROXY_DOMAIN ? "/408CSFamily/" : "/",
  port: 4200,
  head: [
    // vercel 统计 相关配置
    ["script", { type: "text/javascript", src: "/_vercel/insights/script.js" }],
    ["link", { rel: "icon", href: "/408_favicon.ico" }],
    // 百度统计
    [
      "script",
      {},
      `\
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
    ],
  ],
  markdown: {
    // todo 引入代码文件时的路径替换
    importCode: {
      handleImportPath: (str) => {
        if (str.includes("@code")) {
          return str.replace(/^@code/, path.resolve(__dirname, "../../code/"));
        }
        if (str.includes("~@")) {
          return str.replace(/^~@/, path.resolve(__dirname, "../../"));
        }
        return str;
      },
    },
    // md doc formatter headerDepth
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  ...themeConfig,
  // 插件配置
  ...pluginsConfig,
  shouldPrefetch: false,
});
