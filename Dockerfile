# Base Image
FROM nginx:alpine
#Copy the index.html file /usr/share/nginx/html/
COPY . /usr/share/nginx/html/
#Expose Nginx Port
EXPOSE 80
#Start NginxService
CMD ["nginx", "-g", "daemon off;"]