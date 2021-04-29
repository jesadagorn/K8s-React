# base image
FROM node:10.19.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install jquery
RUN npm install -g nodemon
RUN npm install express --save
RUN npm install mysql

ADD server.js /usr/src/app/
ADD public /usr/src/app/public

RUN npm build


# start app
CMD ["npm", "start"]

#docker image build --tag uinotv/pacman-react-k8s:0.0.7 .