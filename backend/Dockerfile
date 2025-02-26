# Dockerfile dans backend
# Utiliser une image de base de Node.js
FROM node:14

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tous les fichiers de ton backend dans le conteneur
COPY . .

# Exposer le port du serveur
EXPOSE 3000

# Commande pour démarrer le serveur
CMD ["node", "server.js"]

