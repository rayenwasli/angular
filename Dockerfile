# Utiliser une image de Node.js pour construire l'application
FROM node:14 AS build

# Créer un utilisateur non-root
RUN useradd -m appuser

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY package*.json ./

# Installer les dépendances en tant qu'utilisateur non-root
USER appuser
RUN npm install

# Copier le reste des fichiers de l'application
COPY --chown=appuser:appuser . .

# Construire l'application Angular
RUN npm run build --prod

# Étape pour servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers construits de l'étape précédente
COPY --from=build /app/dist/rayendevops /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
