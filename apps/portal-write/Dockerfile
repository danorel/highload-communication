FROM node:16 as development

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN ls -lad .

COPY package*.json ./app

RUN npm install glob rimraf
RUN npm install --only=${NODE_ENV}

COPY . /app

RUN npm run build

FROM node:16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./app

RUN npm install --only=${NODE_ENV}

COPY . /app

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]