FROM node:21-alpine as base
WORKDIR /var/www
COPY package.json yarn.lock ./

FROM base as build
RUN yarn install
COPY ./ ./
RUN yarn run build

FROM base as development
ENV NODE_ENV=development
RUN yarn install
COPY ./ ./
USER node
CMD ["yarn", "run", "start:dev"]

FROM base as production
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile
COPY --chown=node:node ./ ./
COPY --chown=node:node --from=build /var/www/dist ./dist
USER node
CMD [ "node", "dist/main.js" ]
