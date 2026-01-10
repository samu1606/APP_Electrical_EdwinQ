FROM nginx:alpine

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Crear directorio para certbot
RUN mkdir -p /var/www/certbot

# Exponer puertos
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]