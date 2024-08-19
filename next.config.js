/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "edit.eteaching.vn",
      "admin.eteaching.vn",
      "eteaching.vn",
      "localhost",
      "127.0.0.1",
      "10.10.51.99",
      "171.244.63.147"
    ]
  }
};

module.exports = nextConfig;
