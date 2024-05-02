FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV API_URL https://admin.eteaching.ongdev.online/wp-json/wp/v2
ENV NEXT_PUBLIC_DOMAIN https://eteaching.ongdev.online
ENV NEXT_PUBLIC_TOKEN_NEXT 610f25e22dbccb07171886c016103a86
ENV ODOO_URL https://odoo.eteaching.ongdev.online
ENV API_RMS_URL https://admin.eteaching.ongdev.online/wp-json/rankmath/v1/getHead?url=https://admin.eteaching.ongdev.online

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


COPY --from=builder /app/next.config.js ./ 
COPY --from=builder /app/.env ./
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
