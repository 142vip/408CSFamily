import {dsSidebar} from "../../manuscripts/ds/ds.sidebar";
import {cppSidebar} from "../../manuscripts/ccp/cpp.sidebar";
import {cnSidebar} from "../../manuscripts/cn/cn.sidebar";
import {MarkMapSidebar} from "../../manuscripts/mark-map/mark-map.sidebar";
import {osSidebar} from "../../manuscripts/os/os.sidebar";

/**
 * 侧边导航栏设置
 */
export const sidebar = {
  "/manuscripts/ds": dsSidebar,
  "/manuscripts/os": osSidebar,
  "/manuscripts/ccp": cppSidebar,
  "/manuscripts/cn": cnSidebar,
  "/manuscripts/mark-map": MarkMapSidebar
}