#
# - 功能: 408CSFamily镜像构建
# - 用法: docker build -f Dockerfile --build-arg APP_VERSION=0.0.1 --build-arg CONTAINER_BUILD=true -t 408CSFamily-0.0.1  .
# - 参数:
#   APP_VERSION: 版本
#   CONTAINER_BUILD: 采用容器构建
#
# 注意：vite构建需要支持node14以上，安装node16较为稳妥

FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:18.18.0-alpine AS build_base
ARG CONTAINER_BUILD
WORKDIR /apps
COPY . .

RUN echo $CONTAINER_BUILD;

## 基于容器自动构建
RUN if [ "$CONTAINER_BUILD" = "true" ]; then  \
    sh ./scripts/ci && pnpm build; \
  fi;

FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine

ARG APP_NAME
ARG APP_VERSION
ARG AUTHOR
ARG EMAIL
ARG DESCRIPTION
ARG GIT_HASH
ARG GIT_MESSAGE
ARG HOME_PAGE

# 作者信息
LABEL "author.name"="$AUTHOR" "author.email"="$EMAIL"

# 项目信息
LABEL "repo.name"=$APP_NAME "repo.version"=$APP_VERSION  \
      "repo.homePage"="$HOME_PAGE" "repo.description"="$DESCRIPTION"

# Git信息
LABEL "git.hash"="$GIT_HASH" "git.message"="$GIT_MESSAGE"
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
