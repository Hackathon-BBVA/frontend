# Imagen base
FROM node:latest

# Carpeta raiz del contenedor
#RUN mkdir -p /app
WORKDIR /app
# Copiado de archivos
#ADD . /app
ADD dist /app/dist
ADD images /app/images
ADD server.js /app
ADD package.json /app
ADD package-lock.json /app
ADD index.html /app

# Dependencias
RUN npm install

# Puerto que exponemos
EXPOSE 3000

# Comandos para ejecutar la aplicacion
CMD ["npm", "start"]