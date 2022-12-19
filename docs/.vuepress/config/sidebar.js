module.exports = {
  // "/category/": require("../../category/sidebar_contents"),
  // "/DataStructure/": require("../../category/sidebar_contents"),
  "/DS": require("../../DS/sidebar_contents"),
  "/OS": [
    {
      text: 'VuePress Reference',
      collapsible: true,
      children: ['/reference/cli.md', '/reference/config.md'],
    },
    {
      text: 'Bundlers Reference',
      collapsible: true,
      children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    },
  ],

};
