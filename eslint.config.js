import { defineVipEslintConfig } from '@142vip/eslint-config'

export default defineVipEslintConfig({
  ignores: [
    '**/CHANGELOG.md',
    '.vuepress/dist/**',
    '.vuepress/.temp/**',
    '.vuepress/.cache/**',
    'vuepress.config.ts.*.mjs',
  ],
  rules: {},
})
