import {searchProPlugin} from "vuepress-plugin-search-pro";
import {path} from "@vuepress/utils";
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";

/**
 * 插件配置
 */
export default {
  plugins: [
    // 组件注册，参考：https://v2.vuepress.vuejs.org/zh/reference/plugin/register-components.html
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../components'),
      // components: {
      //   HelloWorld: path.resolve(__dirname, '../components/HelloWorld.vue')
      // }
    }),
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
  ]
}