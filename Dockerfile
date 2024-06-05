
FROM --platform=linux/amd64 node:16
# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

ENV port = 3000
EXPOSE 3000

# Run it for development
CMD [ "npm", "start" ]

# Run it for production
# CMD [ "npm", "run", "start:production" ] 
