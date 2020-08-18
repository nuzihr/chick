FROM node:14.8-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14.8-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from_builder /app/build .
CMD ["serve", "-s", "."]
