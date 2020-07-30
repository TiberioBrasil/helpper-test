FROM node:12-slim AS base

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod \
  && chown -R node:node /app

USER node
COPY --chown=node:node . .

FROM base

RUN yarn build && \
  rm -rf src/ test/

EXPOSE 3000
CMD ["node", "dist/main.js"]