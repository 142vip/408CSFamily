import { dsSidebar } from '../../ds/ds.sidebar'
import { cppSidebar } from '../../ccp/cpp.sidebar'
import { cnSidebar } from '../../cn/cn.sidebar'
import { MarkMapSidebar } from '../../mark-map/mark-map.sidebar'
import { osSidebar } from '../../os/os.sidebar'

/**
 * 侧边导航栏设置
 */
export const sidebar = {
  '/ds': dsSidebar,
  '/os': osSidebar,
  '/ccp': cppSidebar,
  '/cn': cnSidebar,
  '/mark-map': MarkMapSidebar,
}
