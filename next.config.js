/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "admin-wordpress.ongdev.online",
      "admin-odoo.ongdev.online",
      "etc.ongdev.online",
      "localhost",
      "127.0.0.1",
      "10.10.51.99"
    ]
  }
};

module.exports = nextConfig;
