/*
 * @Description: 配置左侧菜单栏
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-12 07:37:28
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 09:04:46
 */


module.exports = [
  // 'basic_introduction',
  // 'linear_table',
  {
    text: '基础入门',
    link: "/DS/basic_introduction",
    collapsible: false,
    children: [{
      text: '1.1 基本概念',
      link: '/DS/basic_introduction/1.basic_concepts.md'
    }, {
      text: '1.2 数据结构三要素',
      link: '/DS/basic_introduction/2.three_elements_of_data_structure.md'
    }, {
      text: '1.3 算法和算法评价',
      link: '/DS/basic_introduction/3.algorithm_and_algorithm_evaluation.md'
    }],
  },
  {
    text: '线性表',
    collapsible: true,
    link: "/DS/linear_table",
    children: [{
      text: '2.1 基础概念和操作',
      link: '/DS/linear_table/1.basic_concept_and_operation.md'
    }, {
      text: '2.2 线性表的顺序表示',
      link: '/DS/linear_table/2.sequential_representation.md'
    }, {
      text: '2.3 基础概念和操作',
      link: '/DS/linear_table/3.chain_representation.md'
    }, {
      text: '2.4 基础概念和操作',
      link: '/DS/linear_table/4.double_linked_list.md'
    }, {
      text: '2.5 基础概念和操作',
      link: '/DS/linear_table/5.circular_list.md'
    }, {
      text: '2.6 基础概念和操作',
      link: '/DS/linear_table/6.static_linked_list.md'
    }, {
      text: '2.7 基础概念和操作',
      link: '/DS/linear_table/7.comparison_of_sequential_list_and_linked_list.md'
    }, {
      text: '2.8 存储结构的选取',
      link: '/DS/linear_table/8.selection_of_storage_structure.md'
    }, {
      text: '2.9 零碎知识补充',
      link: '/DS/linear_table/9.piecemeal_knowledge_supplement.md'
    }],
  }, {
    text: "栈和队列",
    link: "/DS/栈和队列/",
    collapsible: true,
    children: [{
      text: '3.1 栈的基本概念和基本操作',
      link: '/DS/栈和队列/1.栈的基本概念和基本操作.md'
    }, {
      text: '3.2 栈的顺序存储结构',
      link: '/DS/栈和队列/2.栈的顺序存储结构.md'
    }, {
      text: '3.3 栈的基本概念和基本操作',
      link: '/DS/栈和队列/1.栈的基本概念和基本操作.md'
    }, {
      text: '3.4 栈的基本概念和基本操作',
      link: '/DS/栈和队列/1.栈的基本概念和基本操作.md'
    }, {
      text: '3.5 栈的基本概念和基本操作',
      link: '/DS/栈和队列/1.栈的基本概念和基本操作.md'
    }, {
      text: '3.6 栈的基本概念和基本操作',
      link: '/DS/栈和队列/1.栈的基本概念和基本操作.md'
    }, {
      text: '3.7 栈和队列的应用',
      link: '/DS/栈和队列/7.栈和队列的应用.md'
    }, {
      text: '3.8 特殊矩阵的压缩存储',
      link: '/DS/栈和队列/8.特殊矩阵的压缩存储.md'
    }]
  }
]