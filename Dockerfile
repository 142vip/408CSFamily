## 注意：vite构建需要支持node14以上，安装node16较为稳妥
FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:16.12.0-alpine AS build_base
LABEL version="Beta1.0"  description="408CSFamily合集"
LABEL author="【Github&公众号】：Rong姐姐好可爱" email="fairy@2925.com"
RUN mkdir -p /apps
## 确定工作空间 /apps
COPY . /apps
WORKDIR /apps
## 安装依赖
RUN npm i --registry https://registry.npmmirror.com && npm run build

# 设置部署镜像
FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:latest

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/
EXPOSE 7000
CMD ["nginx", "-g", "daemon off;"]