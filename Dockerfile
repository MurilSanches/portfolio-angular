FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist/portfolio-2 ./dist/portfolio-2
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 4000
ENV PORT=4000
CMD ["node", "dist/portfolio-2/server/server.mjs"]
