FROM node:slim
RUN apt update && apt install -y git
WORKDIR /app
ADD ./config/* config/
ADD ./models/* models/
ADD package.json package-lock.json server.js ./
RUN npm install
EXPOSE 5000
CMD ["node","server.js"]