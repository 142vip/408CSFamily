import antFu from '@antfu/eslint-config'

// 参考：https://github.com/antfu/eslint-config
export default antFu({
  ignores: [
    '**/CHANGELOG.md',
  ],
  gitignore: true,
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  formatters: {
    css: true,
    html: false,
    markdown: 'prettier',
  },
  rules: {
    'no-console': 'warn',
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
  },
})
