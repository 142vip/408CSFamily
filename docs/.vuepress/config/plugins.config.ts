import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) =>
            page.frontmatter.category as string[] | string | undefined,
          formatter: "分类：$content",
        },
        {
          getter: (page) =>
            page.frontmatter.tag as string[] | string | undefined,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
};
