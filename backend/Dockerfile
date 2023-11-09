FROM node
#RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

COPY package.json ./

#USER node
#RUN rm -rf node_modules
#RUN rm -f package-lock.json
#RUN npm cache clean --force
#RUN npm install -g .
#RUN npm install -g  nodemon
#&& npm cache clean --force
RUN yarn install && yarn cache clean

#RUN yarn add global nodemon

#ENV PATH /app/node_modules/.bin:$PATH

COPY . .
#COPY --chown=node:node . /

EXPOSE 8080

#CMD ["yarn", "run", "start"]
#CMD ["node", "server.js"]