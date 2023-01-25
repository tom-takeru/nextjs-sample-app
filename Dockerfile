FROM node:18.12-alpine

WORKDIR /sample-app/

COPY ./package*.json ./
RUN npm ci
