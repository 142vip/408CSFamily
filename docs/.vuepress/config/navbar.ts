export const navbar = [
    {
        text: '首页',
        link: '/'
    },
    // {
    //     text: "算法恶补",
    //     children: [{
    //         text: '习题狂刷',
    //         link: '/manuscripts/algorithm/topic_practice'
    //     }, {
    //         text: '刷题笔记',
    //         link: '/manuscripts/algorithm/algorithm_note'
    //     }, {
    //         text: '在线刷题',
    //         children: [{
    //             text: '杭电OJ', link: 'http://acm.hdu.edu.cn/'
    //         },
    //             {
    //                 text: '牛客网', link: 'https://www.nowcoder.com/'
    //             }, {
    //                 text: 'LeetCode', link: 'https://leetcode-cn.com/'
    //             }]
    //     }]
    // },
    {
        text: "数据结构",
        link: "/manuscripts/ds"
    },
    {
        text: "操作系统",
        link: "/manuscripts/os"
    },
    {
        text: "计算机组成原理",
        link: "/manuscripts/ccp"
    },

    {
        text: "计算机网络",
        link: "/manuscripts/cn"
    },
    {
        text: '其他资料',
        children: [{
            text: '考研相关',
            children: [{
                text: '111',
                link: '/333'
            }]
        }, {
            text: "思维导图",
            children: [{
                text: '数据结构',
                link: '/note-map/ds-map'
            }, {
                text: '操作系统',
                link: '/note-map/os-map'
            }, {
                text: '计算机组成原理',
                link: '/note-map/ccp-map'
            }, {
                text: '计算机网络',
                link: '/note-map/cn-map'
            }]
        }]
    },
    {
        text: "大事记",
        link: "/big-event-history"
    },
];
