import {algorithmSidebar} from "../../manuscripts/algorithm/algorithm.sidebar";
import {dsSidebar} from "../../manuscripts/ds/ds.sidebar";
import {cppSidebar} from "../../manuscripts/ccp/cpp.sidebar";
import osSidebar from "../../manuscripts/os/os.sidebar";
import {cnSidebar} from "../../manuscripts/cn/cn.sidebar";
import {noteMapSidebar} from "../../manuscripts/note-map/note-map.sidebar";

export const sidebar = {
    "/ds": dsSidebar,
    "/ds/coding": algorithmSidebar,
    "/manuscripts/ds":dsSidebar,
    "/manuscripts/os":osSidebar,
    "/manuscripts/ccp":cppSidebar,
    "/manuscripts/cn":cnSidebar,
    "/manuscripts/note-map":noteMapSidebar,
}