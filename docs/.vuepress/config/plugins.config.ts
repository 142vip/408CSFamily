import {searchProPlugin} from "vuepress-plugin-search-pro";
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";

/**
 * 插件配置
 */
export default {
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page: any) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    // // md文档增强
    // mdEnhancePlugin({
    //   // 文件导入
    //   include: true,
    //   // 容器
    //   container: true,
    // }),
    // componentsPlugin({
    //   // 插件选项
    //   components: [
    //     "ArtPlayer",
    //     "AudioPlayer",
    //     "Badge",
    //     "BiliBili",
    //     "CodePen",
    //     "PDF",
    //     "Replit",
    //     "Share",
    //     "SiteInfo",
    //     "StackBlitz",
    //     // "VidStack",
    //     "VideoPlayer",
    //     "XiGua",
    //     "YouTube",
    //   ],
    // }),
  ]
}