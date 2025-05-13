const fs = require('node:fs')
const { VipNodeJS } = require('@142vip/utils')

/**
 * 根据sideBar来快速初始化目录文档
 *
 */
const sideBarData = {
  text: '查找',
  prefix: '查找',
  collapsible: false,
  children: [
    {
      text: '基本概念',
      link: '1.基本概念.md',
    },
    {
      text: '顺序查找',
      link: '2.顺序查找.md',
    },
    {
      text: '折半查找',
      link: '3.折半查找.md',
    },
    {
      text: 'B树和B+树',
      link: '4.B树和B+树.md',
    },
    {
      text: '散列表',
      link: '5.散列表.md',
    },
    {
      text: '总结',
      link: '6.总结.md',
    },
  ],
}

const { prefix, children } = sideBarData

async function quickCreateMdFile() {
  /**
   * 第一步： 创建目录
   */
  const dir = VipNodeJS.pathJoin(__dirname, prefix)
  const isExist = VipNodeJS.existPath(dir)

  if (!isExist) {
    await fs.mkdirSync(dir)
  }

  /**
   * 第二步： 创建文件，并追加文件内容
   */

  for (const { text, link } of children) {
    const filePath = VipNodeJS.pathJoin(dir, link)
    const isExistFile = VipNodeJS.existPath(filePath)
    // 创建
    if (!isExistFile) {
      await VipNodeJS.writeFileByUTF8(filePath, `# ${text} \n\n努力赶稿中，等等我呀...`)
    }
  }
}

void quickCreateMdFile()
