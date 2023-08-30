#!/bin/bash

## 功能：清除容器，删除旧镜像，创建新的容器
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：储凡
## 使用示例：bash xxx.sh 容器名称  镜像地址
##

## 日志颜色定义
readonly successLogger="\033[36m"
readonly errorLogger="\033[1;31m"
readonly warnLogger="\033[1;33m"
## 定义时间
readonly currentTime=$(date "+%Y-%m-%d %H:%M:%S")
readonly repoAddress="registry.cn-hangzhou.aliyuncs.com/142vip/doc_book"
readonly containerName="408CSFamily"
readonly networkName="service_env_net"
## 定义参数
operationName=${1}
version=${2}




## 参数检查
prepare_check(){
  if test -z "${containerName}"
  then
    echo -e "${errorLogger}${currentTime}:参数错误 部署平台不能为空."
    exit 0
  fi

}

## 判断容器存在即删除
## - 一个参数，容器名称
delete_container(){
  docker inspect "${1}" -f '{{.Name}}' > /dev/null
  if [ $? -eq 0 ] ;then
    echo -e "${warnLogger}${currentTime}容器：${1} 存在，现进行删除"
    docker rm -f "${1}"
  fi
}

## 判断镜像存在，即删除
## - 一个参数，镜像地址
delete_image(){
  ## 判断版本号
  if test -z "${version}";then
      echo -e "${errorLogger}${currentTime}:参数错误 镜像版本号不能为空."
    exit 0
  fi

  if [[ "$(docker images -q "${1}" 2> /dev/null)" != "" ]];
    then
      echo -e "${warnLogger}${currentTime}镜像：${1}存在，现进行删除"
      docker rmi "${1}"
  fi
}


## 环境初始成功
run(){
    if [ "${operationName}" == "gitee" ];then
        ## 查看所有
        deploy_to_gitee
      exit 0;
    elif [ "${operationName}" == "github" ]; then
        deploy_to_github
      exit 0;
    elif [ "${operationName}" == "ali" ]; then
      ## 删除容器
      delete_container  "${containerName}"
      ## 删除镜像
      delete_image "${repoAddress}:${containerName}-${version}"
      ## 部署
      deploy_to_ali
      exit 0;
    else
      echo -e "${errorLogger}${currentTime}当前操作不支持,目前只支持:ali/gitee/github"
      exit 0
    fi
}


## 部署到阿里服务器
deploy_to_ali(){
  echo -e "${successLogger}---------------- deploy ${containerName} ali start ---------------- "

  docker run -d --name "${containerName}" \
  -p 7000:80 \
  --network="${networkName}"  \
  --restart=unless-stopped \
  --ip=172.30.0.100 \
  "${repoAddress}:${containerName}-${version}"

  echo -e "${successLogger}---------------- deploy ${containerName} ali end ------------------ "
  docker ps
}

## 部署到github静态资源托管
deploy_to_github(){
  echo -e "${successLogger}---------------- deploy ${containerName} github start ---------------- "

  # 当命令以非零状态退出时，则退出shell
  set -e

  # 进入上级目录，并编译
  npm run build && cd docs/.vuepress/dist
  git init && git add --all
  ## 如果没有输入commit信息，则采用默认
  if [ "${commitInfo}" -eq "" ]; then
      commitInfo="408CSFamily Init"
  fi
  git commit -m "refactor:${commitInfo}"

  ## 配置个人信息
  git config user.name "晚上吃芝士+葡萄的妹妹"
  git config user.email "fairy0115@2925.com"

  git config --list

  # if you are deploying to https://<USERNAME>.github.io
  # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
  # if you are deploying to https://<USERNAME>.github.io/<REPO>
  git push -f https://github.com/mmdapl/408CSFamily.git master:pages/github
  cd -
  echo -e "${successLogger}---------------- deploy ${containerName} github end ------------------ "
}


## 部署到gitee静态资源托管
deploy_to_gitee(){
  exit 0
}




prepare_check

run


