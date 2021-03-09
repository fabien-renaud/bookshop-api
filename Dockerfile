# Alpine Linux is much smaller than most distribution base images (~5MB), and thus leads to much slimmer images in general
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .
RUN npm run build

# Bind application port
EXPOSE 10081
CMD npm start
