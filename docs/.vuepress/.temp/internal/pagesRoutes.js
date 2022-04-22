import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8bf0fafc","/Big_Event_History.html",{"title":""},["/Big_Event_History","/Big_Event_History.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-2d0a038b","/CN/",{"title":""},["/CN/index.html","/CN/Readme.md"]],
  ["v-2d0a3132","/OS/",{"title":"Readme"},["/OS/index.html","/OS/Readme.md"]],
  ["v-62bd4033","/NoteMap/CN_Map.html",{"title":""},["/NoteMap/CN_Map","/NoteMap/CN_Map.md"]],
  ["v-85ddaee2","/NoteMap/DS_Map.html",{"title":""},["/NoteMap/DS_Map","/NoteMap/DS_Map.md"]],
  ["v-5c57558c","/pages/c1bec1/",{"title":""},["/pages/c1bec1/index.html","/DS/README11.html","/DS/README11.md"]],
  ["v-2d0a07e7","/DS/",{"title":""},["/DS/index.html","/DS/Readme.md"]],
  ["v-75163b67","/DS/basic_introduction.html",{"title":"基础入门"},["/DS/basic_introduction","/DS/basic_introduction.md"]],
  ["v-c8ed33c4","/DS/linear_table.html",{"title":"线性表"},["/DS/linear_table","/DS/linear_table.md"]],
  ["v-599b7814","/pages/c12319/",{"title":"Readme"},["/pages/c12319/index.html","/CCP/","/CCP/Readme.md"]],
  ["v-4995d319","/pages/add102/",{"title":""},["/pages/add102/index.html","/category/","/category/README.md"]],
  ["v-0e2293aa","/pages/15aa63/",{"title":"关于作者"},["/pages/15aa63/index.html","/category/about_author.html","/category/about_author.md"]],
  ["v-5d28eacc","/pages/c33acd/",{"title":"赞赏支持"},["/pages/c33acd/index.html","/category/reader_donate.html","/category/reader_donate.md"]],
  ["v-7e68f740","/pages/bdad06/",{"title":"更新日志"},["/pages/bdad06/index.html","/category/update_logs.html","/category/update_logs.md"]],
  ["v-47e9dd3a","/pages/53976b/",{"title":"test"},["/pages/53976b/index.html","/DS/basic_introduction/1.basic_concepts.html","/DS/basic_introduction/1.basic_concepts.md"]],
  ["v-6d791ca4","/pages/3f923d/",{"title":"three_elements_of_data_structure"},["/pages/3f923d/index.html","/DS/basic_introduction/2.three_elements_of_data_structure.html","/DS/basic_introduction/2.three_elements_of_data_structure.md"]],
  ["v-13550f15","/pages/18d025/",{"title":"algorithm_and_algorithm_evaluation"},["/pages/18d025/index.html","/DS/basic_introduction/3.algorithm_and_algorithm_evaluation.html","/DS/basic_introduction/3.algorithm_and_algorithm_evaluation.md"]],
  ["v-37abb588","/DS/coding/algorithm.html",{"title":""},["/DS/coding/algorithm","/DS/coding/algorithm.md"]],
  ["v-a4870ef4","/pages/924aed/",{"title":"basic_concept_and_operation"},["/pages/924aed/index.html","/DS/linear_table/1.basic_concept_and_operation.html","/DS/linear_table/1.basic_concept_and_operation.md"]],
  ["v-52cfe897","/pages/ff395c/",{"title":"sequential_representation"},["/pages/ff395c/index.html","/DS/linear_table/2.sequential_representation.html","/DS/linear_table/2.sequential_representation.md"]],
  ["v-2203c86c","/pages/0a7dde/",{"title":"chain_representation"},["/pages/0a7dde/index.html","/DS/linear_table/3.chain_representation.html","/DS/linear_table/3.chain_representation.md"]],
  ["v-6af7422e","/pages/e577f8/",{"title":"double_linked_list"},["/pages/e577f8/index.html","/DS/linear_table/4.double_linked_list.html","/DS/linear_table/4.double_linked_list.md"]],
  ["v-069c5402","/pages/a7b602/",{"title":"circular_list"},["/pages/a7b602/index.html","/DS/linear_table/5.circular_list.html","/DS/linear_table/5.circular_list.md"]],
  ["v-32135c7a","/pages/5de3a5/",{"title":"static_linked_list"},["/pages/5de3a5/index.html","/DS/linear_table/6.static_linked_list.html","/DS/linear_table/6.static_linked_list.md"]],
  ["v-40ac0f54","/pages/7088fd/",{"title":"comparison_of_sequential_list_and_linked_list"},["/pages/7088fd/index.html","/DS/linear_table/7.comparison_of_sequential_list_and_linked_list.html","/DS/linear_table/7.comparison_of_sequential_list_and_linked_list.md"]],
  ["v-3926f79a","/pages/56b8ef/",{"title":"selection_of_storage_structure"},["/pages/56b8ef/index.html","/DS/linear_table/8.selection_of_storage_structure.html","/DS/linear_table/8.selection_of_storage_structure.md"]],
  ["v-990daf06","/pages/cddc8f/",{"title":"piecemeal_knowledge_supplement"},["/pages/cddc8f/index.html","/DS/linear_table/9.piecemeal_knowledge_supplement.html","/DS/linear_table/9.piecemeal_knowledge_supplement.md"]],
  ["v-0595fa04","/pages/10b7a4/",{"title":"test"},["/pages/10b7a4/index.html","/category/test/1.test.html","/category/test/1.test.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
