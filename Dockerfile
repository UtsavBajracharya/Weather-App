FROM node:14.17.5

RUN npm install hbs nodemon request

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run" , "start"]

