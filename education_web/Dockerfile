# Build
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#Deployment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html 