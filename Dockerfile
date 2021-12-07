FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Copier les ficher de l'app dans le dossier de travail du container > /app
COPY . .

# Port du serveur (server.js) 
EXPOSE 5000

CMD [ "node" ,"server.js"]