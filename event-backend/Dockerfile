FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install --frozen-lockfile



COPY . .

COPY prisma ./prisma/

RUN yarn build

RUN yarn prisma generate


CMD ["yarn", "start:dev"]