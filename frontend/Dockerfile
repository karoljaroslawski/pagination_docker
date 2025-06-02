# docker for backend
FROM node:latest
RUN apt update && apt install -y git
WORKDIR /app
ADD ./public/* public/
ADD ./src/* src/
ADD package.json package-lock.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]