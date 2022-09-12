#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM node:16-alpine as build-step
EXPOSE 8081

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build --prod


#second step

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/softwareentwicklung /usr/share/nginx/html