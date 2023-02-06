#!/bin/bash
## 功能：本地前后端项目构建、打包镜像，上传docker仓库
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：储凡
## 使用示例：bash xxx.sh  版本号
##    -  bash build_image.sh  0.0.1
##


## 日志颜色定义
readonly successLogger="\033[36m"
readonly errorLogger="\033[1;31m"
readonly warnLogger="\033[1;33m"
## 定义时间
readonly currentTime=$(date "+%Y-%m-%d %H:%M:%S")
## 项目名称
readonly projectName="408CSFamily"
## 仓库地址
readonly repoAddress="registry.cn-hangzhou.aliyuncs.com/142vip/doc_book:"
## 版本号
version=${1}

## 镜像名称
imageTagName=${repoAddress}${projectName}-${version}


prepare_check(){
  if test -z "${version}";then
      echo -e "${errorLogger}${currentTime}:参数错误 版本号不能为空。参考版本： 0.0.x"
    exit 0
  fi
}

run(){
  echo -e "${successLogger}---------------- shell ${projectName} start ---------------- "
    docker build  -t  "${imageTagName}" .
  echo -e "${successLogger}---------------- shell ${projectName} end   ---------------- "
  push_docker_image
}




## 推送镜像
push_docker_image(){
    if [[ "$(docker images -q  "${imageTagName}" 2> /dev/null)" != "" ]];
      then
        ## 推送
        docker push "${imageTagName}"
        echo -e "${successLogger}---------------- 上传镜像成功，删除本地镜像 ---------------- "
        docker rmi "${imageTagName}"
    else
        echo -e "${errorLogger}${currentTime}：[镜像] ${imageTagName}不存在"
    fi
  exit 0
}

prepare_check

run


