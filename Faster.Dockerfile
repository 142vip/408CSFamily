#
# - 功能: 快速构建408CSFamily镜像
# - 用法: docker build -f Faster.Dockerfile --build-arg APP_VERSION=0.0.1 -t 408CSFamily-0.0.1  .
#

FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine

ARG APP_VERSION
LABEL version=$APP_VERSION  description="408CSFamily合集"
LABEL author="【Github&公众号】：Rong姐姐好可爱" email="fairy_408@2925.com"

COPY ./docs/.vuepress/dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
