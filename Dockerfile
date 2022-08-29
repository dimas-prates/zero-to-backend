################## DEV ##################
ARG VERSION=16.17.0
ARG NODE_ENV=development
FROM node:${VERSION}-alpine AS development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn","dev"]

############### PRODUCTION ###############
FROM node:${VERSION}-alpine AS production
WORKDIR /opt/app
COPY packge.json yarn.lock ./
RUN yarn install
ARG yarn build:prod
ARG NODE_ENV=${NODE_ENV}
RUN yarn install --prod
CMD ["yarn","start"]