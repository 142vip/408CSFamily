/**
 * 操作系统
 */
export const osSidebar = [
  {
    text: '系统概述',
    prefix: '系统概述',
    collapsible: false,
    children: [
      { text: '引论', link: '1.操作系统引论.md' },
      { text: '发展和分类', link: '2.发展和分类.md' },
      { text: '运行环境', link: '3.运行环境.md' },
      { text: '体系结构', link: '4.体系结构.md' },
    ],
  },
  {
    text: '进程管理',
    prefix: '进程管理',
    collapsible: true,
    children: [
      { text: '进程和线程', link: '1.进程和线程.md' },
      { text: '处理机调度', link: '2.处理机调度.md' },
      { text: '进程同步', link: '3.进程同步.md' },
      { text: '死锁', link: '4.死锁.md' },
      { text: '一些总结', link: '5.总结.md' },
    ],
  },
  {
    text: '内存管理',
    prefix: '内存管理',
    collapsible: true,
    children: [
      { text: '引论', link: '1.引论.md' },
      { text: '虚拟内存', link: '2.虚拟内存.md' },
      { text: '一些总结', link: '3.总结.md' },
    ],
  },
  {
    text: '文件管理',
    prefix: '文件管理',
    collapsible: true,
    children: [
      { text: '基本概念', link: '1.基本概念.md' },
      { text: '文件系统', link: '2.文件系统.md' },
      { text: '磁盘管理', link: '3.磁盘管理.md' },
      { text: '一些总结', link: '4.总结.md' },

    ],
  },
  {
    text: '输入、输出管理',
    prefix: '输入、输出管理',
    collapsible: true,
    children: [
      { text: '基本概述', link: '1.基本概述g.md' },
      { text: '核心子系统', link: '2.核心子系统.md' },
      { text: '高速缓存和缓冲区', link: '3.高速缓存和缓冲区.md' },
      { text: '一些总结', link: '4.总结.md' },
    ],
  },
]
