FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm config set @bit:registry https://node.bit.dev
RUN npm install
RUN npm audit fix
COPY . .
RUN npm run build -- --prod  

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/nextquest /usr/share/nginx/html