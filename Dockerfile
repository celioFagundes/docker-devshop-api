FROM node
WORKDIR /app
ENV NODE_ENV=development
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run","start:dev"]