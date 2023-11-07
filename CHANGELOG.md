# Release history

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<!-- #region recent-alpha -->

## [0.0.1-alpha.10](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.9...v0.0.1-alpha.10) (2023-11-07)


### Features

* docker镜像新增git相关记录的label标记 ([dccfbcf](https://github.com/142vip/408CSFamily/commit/dccfbcfea64e2abd13cfb36ff5ea74fef2273c9f))
* **lint:** 新增工程化规范约束 ([02c58eb](https://github.com/142vip/408CSFamily/commit/02c58eb67227b356eff7b77b518b5037cb98a65b))
* **release:** 同步到github pages时增加部署地址信息 ([66bb15e](https://github.com/142vip/408CSFamily/commit/66bb15e944ec3b6a7c5247b35793adbf7c0227fe))
* 优化lint校验、markdown文档更新、脚本修改等 ([8a10772](https://github.com/142vip/408CSFamily/commit/8a10772cf95b746413b002da346b9a0a67218219))
* 优化页面footer显示形式，展示版本信息 ([b596a86](https://github.com/142vip/408CSFamily/commit/b596a867138014c19f8f9640a0a28cd73cc0d5b1))
* 升级依赖版本 ([ae10c59](https://github.com/142vip/408CSFamily/commit/ae10c590c3e86b998a5f6348f659a29bf565191a))


### Bug Fixes

* **release:** 修复版本发布时zip压缩包过大问题，忽略.git目录 ([55c23f4](https://github.com/142vip/408CSFamily/commit/55c23f412b46a2f00f881953112b09c017406715))


### Performance Improvements

* **vuepress:** 升级主题和插件的版本 ([2feaf6b](https://github.com/142vip/408CSFamily/commit/2feaf6b7bc67b4fab9404dbba000d8e43a084dd9))
* **vuepress:** 升级主题和插件的版本 ([#78](https://github.com/142vip/408CSFamily/issues/78)) ([b9159c5](https://github.com/142vip/408CSFamily/commit/b9159c5bea75adee6163a183c1ee57558b2504a6))

## [0.0.1-alpha.9](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.8...v0.0.1-alpha.9) (2023-10-31)


### Features

* **CD:** 静态站点分支新增next分支的README.md文档 ([381b7d5](https://github.com/142vip/408CSFamily/commit/381b7d55a029cfe4b4fc390b4d3f1b3e4a48dda8))
* 文档内容更新，md文档新增固定链接 ([564c3e0](https://github.com/142vip/408CSFamily/commit/564c3e06d674d620de258de52f07435540f31abf))
* 新增数据结构入门、线性表、栈、队列文章固定链接 ([dc1d847](https://github.com/142vip/408CSFamily/commit/dc1d8479e4d417279945dd780125395ccefeab5a))


### Bug Fixes

* **CI:** 修复依赖下载异常，PNPM版本约束统一 ([af06e39](https://github.com/142vip/408CSFamily/commit/af06e39ed52c3b90c3caaa5b38b830726606a8bd))


### Performance Improvements

* **scripts:** 修改lint脚本，优化markdown文档格式化配置 ([717d7f7](https://github.com/142vip/408CSFamily/commit/717d7f7a093f504a744cedac169451c7b0567411))

## [0.0.1-alpha.8](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.7...v0.0.1-alpha.8) (2023-10-28)


### Features

* **CI:** 新增codeql流水线 ([9202226](https://github.com/142vip/408CSFamily/commit/92022260251fda3aa5458d9a35de0eca35f02d93))
* **gh-pages:** 丰富pages站点的提交信息，实时同步next分支内容 ([1c8f54c](https://github.com/142vip/408CSFamily/commit/1c8f54cc34375792c63005d753ddadcb8603c8fe))


### Bug Fixes

* **CI:** 修复镜像构建时ci版本异常 ([b5be536](https://github.com/142vip/408CSFamily/commit/b5be53605a74249e6ddb0557774a18e1c220119e))
* **CI:** 修改release执行条件，next分支触发 ([86f0594](https://github.com/142vip/408CSFamily/commit/86f0594c4e5ccec4906857cc9bdba822ecd6066f))
* **scripts:** 优化deploy脚本，修复镜像构建异常 ([07f16f7](https://github.com/142vip/408CSFamily/commit/07f16f72cf63e443c25e3d07c19659c7daf917dc))


### Performance Improvements

* **CI:** 简化流水线校验流程 ([15a69a2](https://github.com/142vip/408CSFamily/commit/15a69a2c943f63b2b5f86acae599c9373c4c5ff6))

## [0.0.1-alpha.7](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.6...v0.0.1-alpha.7) (2023-10-26)


### Features

* 408各科导航目录梳理，修改跳转链 ([cd9f486](https://github.com/142vip/408CSFamily/commit/cd9f486bfb3c4f058777102f4ec95d284eafe956))
* **markdownlint-cli:** 添加markdown文档校验，支持lint脚本自动格式化文档 ([151249b](https://github.com/142vip/408CSFamily/commit/151249bf2eda3c190b3b6c61cdcf5d4cc8c5b18c))


### Bug Fixes

* **CI:** 修复流水线构建镜像异常 ([#68](https://github.com/142vip/408CSFamily/issues/68)) ([295299b](https://github.com/142vip/408CSFamily/commit/295299b4b521dc2cc692013c9d0b23d5dc3c431b))
* **nginx:** 修改nginx配置，修复404页面出现首页问题 ([74544ee](https://github.com/142vip/408CSFamily/commit/74544ee6fe85f1c95d73b95f502050e452460b50))
* **pnpm8:** 修复pnpm升级后，netlify无法安装依赖 ([eb9da3d](https://github.com/142vip/408CSFamily/commit/eb9da3d2425a5bba56e8b7a9a5807397e8d14107))


### Performance Improvements

* ci脚本新增pnpm安装，优化CI、CD流水线 ([67c38b0](https://github.com/142vip/408CSFamily/commit/67c38b0564ba7388058ca896498bc26a7fb3e35f))
* **Dockerfile:** 支持node18.18.0 ([c3e8736](https://github.com/142vip/408CSFamily/commit/c3e87363551cd436774ebe2e08185a8126dbedb6))
* 支持PNPM8 ([6c6fc92](https://github.com/142vip/408CSFamily/commit/6c6fc92c40d8807288d12f657febad776090b160))

## [0.0.1-alpha.6](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.5...v0.0.1-alpha.6) (2023-10-15)

### Features

- 修改侧边栏内容，大幅增加md初始文档 ([#61](https://github.com/142vip/408CSFamily/issues/61)) ([fe3dedb](https://github.com/142vip/408CSFamily/commit/fe3dedbc35068a8498ea106e944f963488bfb3c5))
- 删除栈、队列备份文件，优化数据结构文档 ([2d47327](https://github.com/142vip/408CSFamily/commit/2d473270cc5924d5333200f759e7ec212ee4e43f))
- 集成xmind，支持思维导图在线预览 ([3ff248b](https://github.com/142vip/408CSFamily/commit/3ff248b2cdb08313dbaae70eb9665dc9e4b529c1))

### Bug Fixes

- 修复release变更记录异常 ([452e9ea](https://github.com/142vip/408CSFamily/commit/452e9ead6d7a61d0add18235f81011cf7decdf88))
- 修复xmind文件使用viewer依赖构建异常，配置自定义组件只客户端渲染 ([229ae8e](https://github.com/142vip/408CSFamily/commit/229ae8e41c8540e0b5e1297ac0d19907997f5209))
- 修复思维导图显示链接跳转异常 ([b68ade5](https://github.com/142vip/408CSFamily/commit/b68ade5005e89861172c9be1b0e5a9b5a741e464))

### Performance Improvements

- vuepress及主题相关依赖同步最新 ([aa6a54f](https://github.com/142vip/408CSFamily/commit/aa6a54f5a9ec1f4c3313350275415b983c7d84ee))

## [0.0.1-alpha.5](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.4...v0.0.1-alpha.5) (2023-10-10)

### Features

- 优化流水线缓存 ([#55](https://github.com/142vip/408CSFamily/issues/55)) ([dadfea4](https://github.com/142vip/408CSFamily/commit/dadfea48ce9da2632044bb75a186cb774fcbd805))
- 关闭博客功能，加入插件依赖，支持md文档拓展 ([9d24d49](https://github.com/142vip/408CSFamily/commit/9d24d49669768fe0c40f1362ef06110e6fd14f68))
- 新增markdown转思维导图脚本，导航栏改版 ([67cee8c](https://github.com/142vip/408CSFamily/commit/67cee8cbc70ba030e47f2b2a4b3299e760468d49))
- 新增操作系统、数据结构笔记文档 ([6962e3d](https://github.com/142vip/408CSFamily/commit/6962e3d48be173733c818cbc69302a338659d03c))
- 更新思维导图，优化侧边栏快速预览 ([af23b81](https://github.com/142vip/408CSFamily/commit/af23b81246144f545e337f83cfa2bed65dfe6daf))
- 绘制部分思维导图 ([d084c7c](https://github.com/142vip/408CSFamily/commit/d084c7c12d1a62bcf685cc54a23a28d3cdb4abf8))

### Bug Fixes

- 修复CD流水线vercel发布异常 ([384a752](https://github.com/142vip/408CSFamily/commit/384a7524744f4605487d3c2d4ded2e1bef6ae03d))

### Performance Improvements

- 修改CI代码拉取策略，简化scripts脚本命令 ([#54](https://github.com/142vip/408CSFamily/issues/54)) ([5e1aedb](https://github.com/142vip/408CSFamily/commit/5e1aedbd463fcd265c8641270ae65429481fb1d1))

## [0.0.1-alpha.4](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.3...v0.0.1-alpha.4) (2023-09-28)

### Features

- 新增一些文档 ([0d947c7](https://github.com/142vip/408CSFamily/commit/0d947c74c20dbdf170cc49f0281ff4b196b6b206))
- 新增scripts脚本说明 ([32d42f7](https://github.com/142vip/408CSFamily/commit/32d42f77bb5103760794994c0481d7d9b632d1d4))

### Bug Fixes

- 修复Github Release异常 ([c3de0ba](https://github.com/142vip/408CSFamily/commit/c3de0bae093237e870fa8e534e69c219ddd02301))

## [0.0.1-alpha.3](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.2...v0.0.1-alpha.3) (2023-09-28)

### Bug Fixes

- 修复持续交付vercel异常 ([57473e5](https://github.com/142vip/408CSFamily/commit/57473e5e491a0133a2b5494c3b9e7e65b990dd23))

## [0.0.1-alpha.2](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.1...v0.0.1-alpha.2) (2023-09-28)

### Bug Fixes

- 修复release CD异常 ([7ce3714](https://github.com/142vip/408CSFamily/commit/7ce3714f9bcfbcad40ef9df462a343b37742273a))

### Performance Improvements

- 升级依赖版本,支持锁定node18.18 ([a1dfbaf](https://github.com/142vip/408CSFamily/commit/a1dfbaf1d3c22ff5844d5c976e24b35d2578a62e))

## [0.0.1-alpha.1](https://github.com/142vip/408CSFamily/compare/v0.0.1-alpha.0...v0.0.1-alpha.1) (2023-09-08)

### Features

- 优化脚本 ([e3d5fba](https://github.com/142vip/408CSFamily/commit/e3d5fbad7814d0cb652484e0eb5acbdcbe2d940b))
- 修正脚本异常 ([c003e11](https://github.com/142vip/408CSFamily/commit/c003e11b8044bfdf1ff7151f04f9c03fea777095))
- 文档更新 ([0d947c7](https://github.com/142vip/408CSFamily/commit/0d947c74c20dbdf170cc49f0281ff4b196b6b206))
- 新增release发布脚本 ([d94f30a](https://github.com/142vip/408CSFamily/commit/d94f30aa20063cd1c8bd9b08f63acf484fe2e698))
- 新增scripts脚本说明 ([32d42f7](https://github.com/142vip/408CSFamily/commit/32d42f77bb5103760794994c0481d7d9b632d1d4))
- 新增vercel部署ci ([bc59fea](https://github.com/142vip/408CSFamily/commit/bc59fea739b0e20497ac86daf06a2bdbb11f8cf5))
- 脚本优化更新 ([c072b3d](https://github.com/142vip/408CSFamily/commit/c072b3d3a4ae70d542a59b52babb1d67b4102230))

### Bug Fixes

- 修复CI/CD流水线异常 ([edf222f](https://github.com/142vip/408CSFamily/commit/edf222f297dbe57782f46fd6d38dd7c92d59e3fe))

<!-- #endregion recent-alpha -->