#!/usr/bin/env sh

commitInfo=${1}

set -e

npm run build-proxy && cd docs/.vuepress/dist

git init && git add -A

## 如果没有输入commit信息，则采用默认
if [ "${commitInfo}" -eq "" ]; then
    commitInfo="408CSFamily page init"
fi

## 配置个人信息
git config user.name 'chu fan' && git config user.email 'fairy_408@2925.com' && git config --list

git commit -m "refactor:${commitInfo}"


# git push -f https://github.com/mmdapl/408CSFamily.git main

git push -f https://github.com/mmdapl/408CSFamily.git main:pages/github


cd -