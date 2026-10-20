# Base runtime
FROM node:22-bookworm-slim AS base
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Development image
FROM deps AS development
ENV NODE_ENV=development
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]

# Production image
FROM base AS production
ENV NODE_ENV=production
COPY . .

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node src ./src

USER node
EXPOSE 5000
CMD ["npm", "start"]
