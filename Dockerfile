# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Build TypeScript
RUN npm run build

# Make port 3000 available
EXPOSE 3000

# Start server
CMD [ "npm", "start" ]