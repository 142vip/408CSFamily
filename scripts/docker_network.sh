#!/bin/bash

## 功能：设置docker自定义network，并指定网关、IP范围
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


operationName=${1}
networkName=${2}

## 网络名称
readonly defaultNetworkName="service_env_net"
## 子网范围 [/24 子网掩码]
readonly subnet="172.30.0.0/24"
## 网关
readonly gateway="172.30.0.1"


prepare_check(){
    if test -z "$operationName"
    then
      echo -e "${errorLogger}${currentTime}:参数错误 操作类型不能为空。脚本执行eg： bash xxx.sh [ls/init/rm]"
      exit 0
    fi
}

run(){
  if [ "$operationName" == "ls" ];then
      ## 查看所有
      echo -e "${successLogger}---------------- shell ls start ---------------- "
      docker network ls
      echo -e "${successLogger}---------------- shell ls end ------------------ "
    exit 0;
  elif [ "$operationName" == "init" ]; then
      echo -e "${successLogger}---------------- shell init start ---------------- "
      ## 初始化
      init_network
      echo -e "${successLogger}---------------- shell init start ---------------- "
    exit 0;
  elif [ "$operationName" == "rm" ]; then
      ## 移除
      echo -e "${successLogger}---------------- shell rm start ---------------- "
      remove_network
      echo -e "${successLogger}---------------- shell rm start ---------------- "
    exit 0;
  else
    echo -e "${errorLogger}当前操作不支持,目前只支持:ls/init/rm"
    exit 0
  fi
}



## 创建网络
init_network(){
  ## 查询network  -w【全匹配】
  docker network ls | grep -w "${defaultNetworkName}"
  if [ $? -eq 0 ] ;then
     echo -e "${warnLogger}---------------- 容器：${defaultNetworkName}  已存在，无需创建 ---------------- "
     docker network ls
     exit ;
  else
    echo -e "${successLogger}---------------- 网络${networdefaultNetworkNamekName},现进行初始化 ---------------- "
    docker network ls
    docker network create \
      --subnet="${subnet}" \
      --gateway="${gateway}" \
      "${defaultNetworkName}"
    echo -e "${successLogger}---------------- 创建后 ---------------------"
    docker network ls
    docker netwrok inspect "${networkName}"
  fi
}

## 删除网络
remove_network(){
  if test -z "$networkName";then
        echo -e "${errorLogger}${currentTime}:参数错误 网络名称不能为空。脚本执行eg： bash xxx.sh rm  网络名称"
      exit 0
  fi
  ## 判断是否存在  -w【全匹配】
  docker network ls | grep -w "${networkName}"
  if [ $? -eq 1 ] ;then
      echo -e "${errorLogger}${currentTime}:容器网络：${networkName}  不存在，删除无效  "
    exit 0;
  fi

  echo -e "${successLogger}----------------删除前---------------------"
  docker network ls
    docker network rm "${networkName}"
  echo -e "${successLogger}----------------删除后---------------------"
  docker network ls
}


prepare_check

run