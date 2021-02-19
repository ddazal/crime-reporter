############################################################
# Docker file for configuring the node.js - Express API
############################################################

# Get the latest image from hub
FROM node:latest

# Create working directory
RUN mkdir -p /usr/src/app

# Configure working directory
WORKDIR /usr/src/app

# Copy dependencies list to the container
COPY package.json /usr/src/app/

# Install dependencies inside the container (generating node_modules directory)
RUN npm install

# Copy all the application files to the container
COPY . /usr/src/app

# Configure the port to listen
EXPOSE 3030

# Initial command to start the application
CMD [ “npm”, “start” ]