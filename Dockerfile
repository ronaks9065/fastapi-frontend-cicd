FROM node:22-slim AS build

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/ --global

RUN rm -rf node_modules package-lock.json && npm cache clean --force && npm cache verify
RUN npm install -g npm@latest && npm install -g @angular/cli@latest

COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN ng build --configuration=production


FROM nginx:alpine

COPY --from=build /app/dist/edcaas-frontend/browser /usr/share/nginx/html
COPY --from=build /app/dist/edcaas-frontend/server /usr/share/nginx/server
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]