FROM node:21-alpine as base
WORKDIR /var/www
RUN apk update
RUN apk add --no-cache build-base gcc musl-dev
COPY package.json ./

FROM base as build
RUN yarn install
COPY ./ ./
RUN npm run build

FROM base as development
ENV NODE_ENV=development
RUN yarn install
COPY ./ ./
USER node
CMD ["yarn", "run", "start:dev"]

FROM base as production
ENV NODE_ENV=production
RUN npm install --frozen-lockfile
COPY --chown=node:node ./ ./
COPY --chown=node:node --from=build /var/www/dist ./dist
USER node
CMD [ "node", "dist/main.js" ]
