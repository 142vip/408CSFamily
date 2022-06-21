#!/bin/bash
## 功能：本地前后端项目构建、打包镜像，上传docker仓库
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：Rong姐姐好可爱
## 使用示例：bash xxx.sh 容器名称  版本号
##    -  bash build_image.sh oauth_login 0.0.1
##


## 日志颜色定义
readonly successLogger="\033[36m"
readonly errorLogger="\033[1;31m"
readonly warnLogger="\033[1;33m"
## 定义时间
readonly currentTime=$(date "+%Y-%m-%d %H:%M:%S")
## 项目名称
readonly projectName="408CSFamily"
## 版本号
version=${1}


prepare_check(){
  if test -z "${version}";then
      echo -e "${errorLogger}${currentTime}:参数错误 版本号不能为空。参考版本： 0.0.x"
    exit 0
  fi
}

run(){
  echo -e "${successLogger}---------------- shell doc_book start ---------------- "
    docker build  -t  registry.cn-hangzhou.aliyuncs.com/142vip/doc_book:"${projectName}_${version}" .
  echo -e "${successLogger}---------------- shell doc_book end   ---------------- "
  push_docker_image
}





push_docker_image(){
    if [[ "$(docker images -q  registry.cn-hangzhou.aliyuncs.com/142vip/doc_book:"${projectName}_${version}" 2> /dev/null)" != "" ]];
      then
        ## 推送
        docker push registry.cn-hangzhou.aliyuncs.com/142vip/doc_book:"${projectName}_${version}"
        echo -e "${successLogger}---------------- 上传镜像成功，删除本地镜像 ---------------- "
        docker rmi registry.cn-hangzhou.aliyuncs.com/142vip/doc_book:"${projectName}_${version}"
    else
        echo -e "${errorLogger}${currentTime}：镜像：registry.cn-hangzhou.aliyuncs.com/142vip/doc_book:${projectName}_${version}不存在"
    fi
  exit 0
}



prepare_check

run


