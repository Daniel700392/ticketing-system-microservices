FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3003
ENV SERVICE_NAME=payment-service

CMD ["node", "src/app.js"]