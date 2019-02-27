# Set the base image to Ubuntu
FROM ubuntu:trusty

# File Author / Maintainer
MAINTAINER UBC / Microsoft

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    apt-get -y install apt-transport-https && \
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# Install Yarn
RUN sudo apt-get update && \
    sudo apt-get install -y nodejs && \
    sudo apt-get install -y yarn

# Install EXP
RUN yarn global add expo-cli

# Set work directory
RUN mkdir -p /app
WORKDIR /app

COPY package.json .
RUN yarn
COPY . .

EXPOSE 19001
EXPOSE 19002
EXPOSE 19000

CMD yarn && \
    yarn start
