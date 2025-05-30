#
# - 功能: 408CSFamily镜像构建
# - 用法: docker build -f Dockerfile --build-arg APP_VERSION=0.0.1  -t 408CSFamily-0.0.1  .
# - 参数:
#   APP_VERSION: 版本
#   CONTAINER_BUILD: 采用容器构建
#
# 注意：vite构建需要支持node14以上，安装node16较为稳妥

FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:20.17.0-alpine AS build_base
ARG CONTAINER_BUILD

## 设置环境变量，支持容器构建时使用layer缓存，参考：https://pnpm.io/zh/docker
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /apps
COPY . .

RUN echo $CONTAINER_BUILD;

## 基于容器自动构建
RUN --mount=type=cache,id=pnpm,target=/pnpm/store sh ./scripts/ci && if [ "$NEED_PROXY" = "false" ];  \
  then \
     pnpm build; \
  else \
     pnpm build:proxy; \
  fi;

FROM --platform=linux/amd64 registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.27.0-alpine
#FROM --platform=linux/amd64 ,linux/arm64 nginx:1.27.0-alpine

ARG APP_NAME
ARG APP_VERSION
ARG AUTHOR
ARG EMAIL
ARG DESCRIPTION
ARG GIT_HASH
ARG GIT_MESSAGE
ARG HOME_PAGE

# 作者信息
LABEL "maintainer"="$AUTHOR <$EMAIL>"

# 项目信息
LABEL "repo.name"=$APP_NAME "repo.version"=$APP_VERSION  \
      "repo.homePage"="$HOME_PAGE" "repo.description"="$DESCRIPTION"

# Git信息
LABEL "git.hash"="$GIT_HASH" "git.message"="$GIT_MESSAGE"
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/
COPY --from=build_base /apps/nginx.conf /etc/nginx/
