FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install --frozen-lockfile



COPY . .

COPY start.sh ./

COPY prisma ./prisma/

RUN yarn build

RUN yarn prisma generate


CMD ["yarn", "start:dev"]