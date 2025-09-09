FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npx prisma generate || true
RUN npm run build || true
EXPOSE 4000
CMD ["npm", "run", "dev"]
