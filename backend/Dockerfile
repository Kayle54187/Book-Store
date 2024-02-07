FROM node:18-alpine3.16 As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run prisma:generate

RUN npm run build

FROM node:18-alpine3.16 as production

# ARG FILE_UPLOAD_PATH

# ENV FILE_UPLOAD_PATH=$FILE_UPLOAD_PATH

COPY --from=development /usr/src/app/node_modules ./node_modules
COPY --from=development /usr/src/app/package*.json ./
COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/prisma ./prisma
# RUN mkdir -p FILE_UPLOAD_PATH
EXPOSE 3000
CMD [  "npm", "run", "start:migrate:prod" ]