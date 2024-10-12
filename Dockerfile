# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if available)
COPY package*.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application (if needed)
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "run", "start"]