# Dockerfile dans backend
# Utiliser une image de base de Node.js
FROM node:14

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du backend dans le conteneur
COPY . .

# Exposer le port du serveur (ici le port 3000)
EXPOSE 3000

# Exécuter les tests Jest lorsque le conteneur démarre
CMD ["npm", "test"]

