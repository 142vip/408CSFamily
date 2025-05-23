import { VipExecutor, VipNodeJS } from '@142vip/utils'

const __dirname = VipNodeJS.getProcessCwd()

const markMapSourcePath = VipNodeJS.pathJoin(__dirname, 'docs/mark-map')
const markMapTargetPath = VipNodeJS.pathJoin(__dirname, 'docs/.vuepress/public/mind-map')

/**
 * 扫描目录
 */
function scanDirectory(directory: string, fileType: string): (string | null)[] {
  const fileList = VipNodeJS.readdirSync(directory)

  return fileList
    .map((file) => {
      const filePath = VipNodeJS.pathJoin(directory, file)
      const fileExtension = VipNodeJS.pathExtname(file).toLowerCase()

      if (fileExtension === `.${fileType.toLowerCase()}`) {
        return filePath
      }
      return null
    })
    // 过滤空
    .filter(c => c != null)
}

/**
 * 将思维导图的md格式转化为html，提供在线预览
 * 链接：https://www.npmjs.com/package/markmap-cli
 */

async function markMapMain(): Promise<void> {
  /**
   * 第一步： 清空站点思维导图文件存放目录
   */
  const delHtmlDir = `rm -rf ${VipNodeJS.pathJoin(markMapTargetPath, '*')}`

  /**
   * 第二步： 将md文档转化为思维导图网页
   */
  const mdList = scanDirectory(markMapSourcePath, 'md')
  const mdToHtmlCmdStr = mdList.map(md => `npx markmap --no-open ${md}`).join(' && ')

  /**
   * 第三步： 根据文件类型将思维导图网页文件移动到站点指定目录
   */
  const mdHtmlByFileType = VipNodeJS.pathJoin(markMapSourcePath, '*.html')
  const moveHtmlCmdStr = `mv -f ${mdHtmlByFileType} ${markMapTargetPath}`

  await VipExecutor.commandStandardExecutor([
    delHtmlDir,
    mdToHtmlCmdStr,
    moveHtmlCmdStr,
  ])

  // /**
  //  * 第四步： 对mind-map中的xmind文件重命名
  //  */
  // console.log(markMapSourcePath, import.meta.url)
  // const markMapData = createRequire(import.meta.url)('../../docs/mark-map/index.json')
  // console.log(111, markMapData)
  // for (const { originXmindFileName, targetXmindFileName } of markMapData) {
  //   const originPath = path.join(markMapTargetPath, originXmindFileName)
  //   const targetPath = path.join(markMapTargetPath, targetXmindFileName)
  //
  //   // html文件
  //   await fs.renameSync(originPath, targetPath)
  // }
}

void markMapMain()
