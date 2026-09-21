import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { vipDocSite, VipPackageJSON } from '@142vip/utils'

export const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/** 站点标题 */
export const siteTitle = '计算机408全家桶'

/** 站点描述（与 package.json 保持一致） */
export const siteDescription = pkg.description

/** 站点域名（无尾部斜杠） */
export const siteOrigin = OPEN_SOURCE_ADDRESS.HOME_PAGE_DOMAIN_408.replace(/\/$/, '')

/**
 * 站点 base 路径
 * - `NEED_PROXY=true` 时为 `/{pkg.name}/`
 * - 否则为 `/`
 */
export const siteBase = vipDocSite.getBase(pkg.name)

/** 站点首页绝对地址 */
export const homeUrl = new URL(siteBase || '/', `${siteOrigin}/`).href

/** 站点 Logo（深浅色导航栏通用，`.vuepress/public/logo.png`） */
export const siteLogo = '/logo.png'

/** Open Graph / 社交平台分享图绝对地址 */
export const siteLogoUrl = new URL(siteLogo, homeUrl).href
