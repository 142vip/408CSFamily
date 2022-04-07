#!/usr/bin/env sh

###
 # @Description: 静态资源网站部署脚本
 # @Version: Beta1.0
 # @Author: 【B站&公众号】Rong姐姐好可爱
 # @Date: 2021-02-19 22:34:57
 # @LastEditors: 【B站&公众号】Rong姐姐好可爱
 # @LastEditTime: 2022-04-08 00:03:30
### 

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '408init'


## 配置个人信息
git config user.name "mmdapl"
git config user.email "fairy@2925.com"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/fairyfan1998/408CSFamily.git master:gh-pages

cd -