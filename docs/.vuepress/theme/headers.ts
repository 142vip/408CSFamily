import type { HeadConfig } from '@vuepress/shared'

export const headers: HeadConfig[] = [
  // vercel统计 相关配置
  ['script', { type: 'text/javascript', src: '/_vercel/insights/script.js' }],
  ['link', { rel: 'icon', href: '/408_favicon.ico' }],
  // 百度统计
  ['script', {}, `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();`],
]
