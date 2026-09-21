import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { pkg } from './site'

/** 页脚 HTML */
export const footerHtmlStr = `
<div>
    All Rights Reserved
    <a href="${OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP}" target="_blank">@${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}</a> | 
    <strong>${pkg.name}@v${pkg.version} </strong>
</div>
<div style="margin-top: 5px">
  <a href="${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_NAME}</a> 
  <span style="margin: 0 5px;">|</span>
  <a href="${OPEN_SOURCE_ADDRESS.BEI_AN_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BEI_AN_NAME}</a>
</div>
`

/** 版权信息 HTML */
export const copyrightHtmlStr = `
<strong>MIT 协议</strong> | 版权所有 © 2015-${new Date().getFullYear()} ${OPEN_SOURCE_AUTHOR.name}
<div style="margin-top: 10px">
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_GITHUB}"
      target="_blank"
      style="padding: 5px"
    >
        <img
          alt="408CSFamily Deploy In Github Pages"
          src="https://img.shields.io/badge/github-success-green?logo=github&color=bef9c6"
        >
    </a>
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_NETLIFY}"
      target="_blank"
      style="padding: 5px"
    >
        <img
          alt="408CSFamily Deploy In Netlify"
          src="https://img.shields.io/badge/netlify-success-green?logo=netlify&color=bef9c6"
        >
    </a>
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_VERCEL}"
      target="_blank"
      style="padding: 5px"
    >
        <img
          src="https://img.shields.io/badge/vercel-success-green?logo=vercel&color=bef9c6"
          alt="408CSFamily Deploy In Vercel"
        >
    </a>
</div>
`
