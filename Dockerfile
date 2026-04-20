# Dockerfile

# Stage 1: Build the application
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port the app runs at
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]