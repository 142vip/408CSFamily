#!/usr/bin/env sh

commitInfo=${1}

set -e

## 进入上级目录，并编译
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
git config user.name '妹妹手上有抹茶'
git config user.email 'fairy_408@2925.com'

git config --list

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f   https://github.com/mmdapl/408CSFamily.git master:pages/github


cd -