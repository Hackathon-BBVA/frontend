# Imagen base
FROM node:latest

# Carpeta raiz del contenedor
WORKDIR /callcenter

# Copiado de archivos
#ADD . /app
ADD dist /callcenter/dist
ADD server.js /callcenter
ADD package.json /callcenter
ADD package-lock.json /callcenter

# Dependencias
RUN npm install

# Puerto que exponemos
EXPOSE 3000

# Comandos para ejecutar la aplicacion
CMD ["npm", "start"]