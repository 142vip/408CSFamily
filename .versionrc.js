/**
 * commit-and-tag-version 模块配置提交、标签功能
 * - 使用：https://github.com/conventional-changelog/standard-version
 * - 配置：https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md
 */
module.exports = {
  header: '# Release history\n\nAll notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n<!-- #region recent-alpha -->\n',
  releaseCommitMessageFormat: 'chore(release): publish v{{currentTag}}',
  types: [
    {type: 'feat', section: 'Features'},
    {type: 'feature', section: 'Features'},
    {type: 'fix', section: 'Bug Fixes'},
    {type: 'perf', section: 'Performance Improvements'},
    {type: 'revert', section: 'Reverts'},
    {type: 'docs', section: 'Documentation', hidden: true},
    {type: 'style', section: 'Styles', hidden: true},
    {type: 'chore', section: 'Miscellaneous Chores', hidden: true},
    {type: 'refactor', section: 'Code Refactoring', hidden: true},
    {type: 'test', section: 'Tests', hidden: true},
    {type: 'build', section: 'Build System', hidden: true},
    {type: 'ci', section: 'Continuous Integration', hidden: true}
  ],
  skip: {
    bump: true,
    commit: true,
    tag: true
  }
}
