# OpenShift Subnet Generator

A modern web application for calculating and generating subnet configurations for OpenShift clusters.

## Features

- 🎯 Calculate Total IP Addresses
- 🔢 Calculate IP per Node
- 📊 Calculate Maximum Nodes
- 📝 Generate YAML configurations
- 🎨 Modern glassmorphism UI with Ubuntu font
- 📱 Fully responsive design

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

## Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker Deployment
```bash
# Build Docker image
docker build -t ocp-subnet-gen .

# Run container
docker run -p 8080:80 ocp-subnet-gen
```

## Project Structure
