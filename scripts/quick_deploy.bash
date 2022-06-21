#!/bin/bash

## 功能：清除容器，删除旧镜像，创建新的容器
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：Rong姐姐好可爱
## 使用示例：bash xxx.sh 容器名称  镜像地址
##

## 日志颜色定义
readonly successLogger="\033[36m"
readonly errorLogger="\033[1;31m"
readonly warnLogger="\033[1;33m"
## 定义时间
readonly currentTime=$(date "+%Y-%m-%d %H:%M:%S")
## 定义参数
containerName=${1}
imageName=${2}




## 参数检查
prepare_check(){
  if test -z "${containerName}"
  then
    echo -e "${errorLogger}${currentTime}参数错误 容器名称不能为空。脚本执行eg： bash xxx.sh 容器名称  镜像地址"
    exit 0
  fi
  if test -z "${imageName}";then
      echo -e "${errorLogger}${currentTime}参数错误 镜像地址不能为空。脚本执行eg： bash xxx.sh 容器名称  镜像地址"
    exit 0
  fi
}

## 判断容器存在即删除
delete_container(){
  docker inspect "${containerName}" -f '{{.Name}}' > /dev/null
  if [ $? -eq 0 ] ;then
    echo -e "${warnLogger}${currentTime}容器：${containerName} 存在，现进行删除"
    docker rm -f "${containerName}"
  fi
}

## 判断镜像存在，即删除
delete_image(){
  if [[ "$(docker images -q "${imageName}" 2> /dev/null)" != "" ]];
    then
      echo -e "${warnLogger}${currentTime}镜像：${imageName}存在，现进行删除"
      docker rmi "${imageName}"
  fi
}


## 环境初始成功
run(){
    if [ "$operationName" == "client_web" ];then
        ## 查看所有
        deploy_client_web
      exit 0;
    elif [ "$operationName" == "oauth_login" ]; then
        deploy_oauth_login
      exit 0;
    elif [ "$operationName" == "server_api" ]; then
        deploy_server_api
      exit 0;
    else
      echo -e "${errorLogger}当前操作不支持,目前只支持:ls/init/rm"
      exit 0
    fi
}

## 创建容器，进行部署
deploy(){
  ## 执行docker容器创建
  docker run -d --name="${containerName}" \
  -p 4000:4000 \
  --restart=always \
  "${imageName}"
}

deploy_client_web(){
  echo -e "${successLogger}---------------- deploy client_web start ---------------- "

  docker run -d --name oauth2-client \
  -p 8080:80 --network=tencent-net  \
  --ip=172.22.0.10 \
  --restart=unless-stopped

  echo -e "${successLogger}---------------- deploy client_web end ------------------ "
}

deploy_oauth_login(){
  echo -e "${successLogger}---------------- deploy oauth_login start ---------------- "

  docker run -d --name="${containerName}" \
  -p 4000:4000 \
  --restart=always \
  "${imageName}"

  echo -e "${successLogger}---------------- deploy oauth_login end ------------------ "
}


deploy_server_api(){
  echo -e "${successLogger}---------------- deploy server_api start ---------------- "

  docker run -d --name="${containerName}" \
  -p 4000:4000 \
  --restart=always \
  "${imageName}"

  echo -e "${successLogger}---------------- deploy server_api end ------------------ "
}




prepare_check
### 处理容器和镜像，更新初始化
delete_container
delete_image
### 运行，镜像更新
run


