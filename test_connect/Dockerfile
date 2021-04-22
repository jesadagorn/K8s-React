# base image
FROM node:9.11

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g
RUN npm install express
RUN npm install body-parser
RUN npm install mysqljs/mysql
RUN npm install mysql

# start app
CMD ["npm", "start"]