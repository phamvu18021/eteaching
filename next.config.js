/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "odoo.eteaching.ongdev.online",
      "admin.eteaching.ongdev.online",
      "eteaching.ongdev.online",
      "localhost",
      "127.0.0.1",
      "10.10.51.99"
    ]
  }
};

module.exports = nextConfig;
