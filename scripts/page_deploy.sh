#!/usr/bin/env sh

###
 # @Description: 静态资源网站部署脚本
 # @Version: Beta1.0
 # @Author: 【B站&公众号】Rong姐姐好可爱
 # @Date: 2021-02-19 22:34:57
 # @LastEditors: 【B站&公众号】Rong姐姐好可爱
 # @LastEditTime: 2022-04-18 23:35:15
### 

commitInfo=${1}

set -e

# 进入上级目录，并编译
npm run build

## 切换到dist文件目录
cd docs/.vuepress/dist

git init
git add -A

## 如果没有输入commit信息，则采用默认
if [ "${commitInfo}" -eq "" ]; then
    commitInfo="408CSFamily page init"
fi

git commit -m "refactor:${commitInfo}"


## 配置个人信息
git config user.name "喜欢吃芝士葡萄的妹妹"
git config user.email "fairy0115@2925.com"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/mmdapl/JavaScriptCollection.git master:pages/github


cd -