FROM node:lts-alpine AS builder
WORKDIR /vue
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS webserver
WORKDIR /usr/share/nginx/html
COPY --from=0 /vue/dist .
EXPOSE 8080:80