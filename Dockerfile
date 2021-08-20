# syntax=docker/dockerfile:1

FROM node:12.18.1
WORKDIR /front
EXPOSE 3000:3000
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY . .

CMD  HOST=0 PORT=3000 npm run dev
