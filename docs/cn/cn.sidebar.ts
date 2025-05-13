/**
 * 计算机网络
 */
export const cnSidebar = [
  {
    text: '体系结构',
    prefix: '体系结构',
    children: [
      { text: '基本介绍', link: '1.引论.md' },
      { text: '体系结构与参考模型', link: '2.体系结构与参考模型.md' },
    ],
  },
  {
    text: '物理层',
    prefix: '物理层',
    children: [
      { text: '通信基础', link: '1.通信基础.md' },
      { text: '传输介质', link: '2.传输介质.md' },
      { text: '物理层设备', link: '3.物理层设备.md' },
      { text: '一些总结', link: '4.总结.md' },
    ],
  },
  {
    text: '数据链路层',
    prefix: '数据链路层',
    children: [
      { text: '基本功能', link: '1.通信基础.md' },
      { text: '组帧', link: '2.组帧.md' },
      { text: '差错控制', link: '3.差错控制.md' },
      { text: '流量控制&可靠传输', link: '4.流量控制&可靠传输.md' },
      { text: '介质访问控制', link: '5.介质访问控制.md' },
      { text: '局域网', link: '6.局域网.md' },
      { text: '广域网', link: '7.广域网.md' },
      { text: '通信设备', link: '7.通信设备.md' },
      { text: '一些总结', link: '8.总结.md' },

    ],
  },
  {
    text: '网络层',
    prefix: '网络层',
    children: [
      { text: '基本功能', link: '1.基本功能.md' },
      { text: '路由算法', link: '2.路由算法.md' },
      { text: '路由协议', link: '3.路由协议.md' },
      { text: 'IPV4', link: '4.IPV4.md' },
      { text: 'IPV6', link: '5.IPV6.md' },
      { text: 'IP组播&移动IP', link: '6.IP组播&移动IP.md' },
      { text: '网络层设备', link: '7.网络层设备.md' },
      { text: '一些总结', link: '8.总结.md' },
    ],
  },
  {
    text: '传输层',
    prefix: '传输层',
    children: [
      { text: '提供的服务', link: '1.提供的服务.md' },
      { text: 'UDP协议', link: '2.UDP协议.md' },
      { text: 'TCP协议', link: '3.TCP协议.md' },
      { text: '一些总结', link: '4.总结.md' },
    ],
  },
  {
    text: '应用层',
    prefix: '应用层',
    children: [
      { text: '应用模型', link: '1.应用模型.md' },
      { text: 'DNS', link: '2.DNS.md' },
      { text: 'FTP', link: '3.FTP.md' },
      { text: '电子邮件', link: '4.电子邮件.md' },
      { text: 'HTTP', link: '4.HTTP.md' },
      { text: '一些总结', link: '5.总结.md' },
    ],
  },
]
