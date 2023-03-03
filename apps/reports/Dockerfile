FROM node:lts-hydrogen as build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run clean

RUN npm run build

FROM node:lts-hydrogen as production

ARG NODE_ENV=production
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV NODE_ENV=${NODE_ENV}
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --omit=dev

COPY --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/index.js" ]
