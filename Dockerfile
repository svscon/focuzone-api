FROM node:20-alpine

# 时区上海
RUN apk add --no-cache tzdata ca-certificates
ENV TZ=Asia/Shanghai

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# 安装依赖 + prisma生成客户端
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/
RUN npm ci
RUN npx prisma generate

COPY . .

# 编译nest
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]