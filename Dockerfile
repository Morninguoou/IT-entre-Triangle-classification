FROM nginx:alpine

# Copy the application files to the nginx html directory
COPY src/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80