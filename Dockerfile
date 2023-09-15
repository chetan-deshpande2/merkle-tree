FROM node:16-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install --non-interactive --frozen-lockfile