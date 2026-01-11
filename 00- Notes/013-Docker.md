# 🐳 Docker Guide for Node.js Applications

This document explains **Docker fundamentals**, **commands**, **Dockerfile**, **Docker Compose**, **Environment Variables**, **Multi-stage builds**, and **MongoDB usage** for Node.js applications.

---

## 📦 Basic Dockerfile

```dockerfile
FROM node:22.11.0

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "start"]
```

### 🔹 Explanation
- **FROM**: Base image (Node.js 22)
- **WORKDIR**: App directory inside container
- **COPY**: Copies project files
- **RUN**: Install dependencies
- **CMD**: Default start command

---

## 🧹 .dockerignore

```dockerignore
node_modules
Dockerfile
.dockerignore
```

Prevents unnecessary files from being copied into the image.

---

## ⚙️ Helpful Commands

### Build Image
```bash
docker build -t image-name .
docker build --no-cache -t image-name .
```

> ⚠️ Image names must be lowercase

### Images
```bash
docker images
docker rmi image-name
```

### Containers
```bash
docker run --name con-name image-name
docker run --name con-name -d image-name
docker run --name con-name -d -p 4000:3000 image-name
```

### List Containers
```bash
docker ps
docker ps -a
```

### Stop / Start / Restart
```bash
docker stop con-name
docker start con-name
docker restart con-name
```

### Remove Containers
```bash
docker rm con-name
docker rm con-name -f
docker container prune
```

### Container Shell
```bash
docker exec con-name bash
docker exec -it con-name bash
```

---

## 🔥 Hot Reloading (Volumes)

### Two-way Sync
```bash
docker run --name container-name -v localPath:dockerPath -d -p 4000:3000 image-name
```

### Read-only Sync
```bash
docker run --name container-name -v localPath:dockerPath:ro -d -p 4000:3000 image-name
```

### Windows Example
```bash
docker run --name container-name -v ${PWD}/src:/app/src:ro -d -p 4000:3000 image-name
```

---

## 🌍 Environment Variables

### Inside Dockerfile
```dockerfile
ENV KEY=VALUE
```

### Show Environment Variables
```bash
printenv
```

### Container-level ENV
```bash
docker run --name con-one --env PORT=4000 --env MOOD=dev -d image-name
```

### Using `.env` File
```bash
docker run --name con-one --env-file ./.env -d image-name
```

---

## 🧩 Docker Compose

### File: `docker-compose.yaml`
```yaml
version: '2.27.7'
services:
  web-app:
    build: .
    container_name: con-name2
    ports:
      - "4040:3000"
    volumes:
      - ./src:/app/src:ro
    environment:
      - PORT=8000
    env_file:
      - ./.env
```

### Run
```bash
docker-compose up
docker-compose down
```

---

## 🧪 ARG Usage (Build Time Variables)

```dockerfile
ARG MOOD=development

RUN if [ "$MOOD" = "production" ]; then npm i --only=production; else npm i; fi
```

### Compose with ARG
```yaml
build:
  context: .
  args:
    - MOOD=dev
```

---

## 🚀 Multi-Stage Builds (Best Practice)

```dockerfile
FROM node:22.11.0 as base
WORKDIR /app
COPY package.json .

FROM base as dev
RUN npm i
COPY . .
CMD ["npm", "run", "start:dev"]

FROM base as prod
RUN npm i --only=production
COPY . .
CMD ["npm", "run", "start"]
```

### Compose Target
```yaml
build:
  context: .
  target: prod
```

---

## 🗄️ MongoDB with Docker

### Pull Mongo Image
```bash
docker pull mongo
```

### Inspect Mongo Container
```bash
docker inspect dockerapp-mongo-1
```

---

## 📌 Best Practices

- Use **multi-stage builds**
- Avoid copying `node_modules`
- Use `.env` files
- Prefer **Docker Compose**
- Keep images small
- Use **read-only volumes**
- Never store secrets inside images

---

## 📚 Extra Learning Resources

- https://docs.docker.com/
- https://hub.docker.com/
- https://docs.docker.com/compose/
- https://nodejs.org/

---

Happy Dockering 🐳🚀
