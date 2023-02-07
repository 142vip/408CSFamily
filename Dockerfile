#
# - 功能: 408CSFamily镜像构建
# - 用法: docker build -f Dockerfile --build-arg APP_VERSION=0.0.1 -t 408CSFamily-0.0.1  .
#

## 注意：vite构建需要支持node14以上，安装node16较为稳妥
FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:16.12.0-alpine AS build_base
RUN mkdir -p /apps
WORKDIR /apps
COPY . .

RUN npm i pnpm@6 -g && pnpm i -D && pnpm build

FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine

ARG APP_VERSION
LABEL version=$APP_VERSION   description="408CSFamily合集"
LABEL author="【Github&公众号】：Rong姐姐好可爱" email="fairy_408@2925.com"

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
