/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "eteachingwp.eufm.vn",
      "eteaching.eufm.vn",
      "localhost",
      "eteachingodoo.eufm.vn"
    ]
  }
};

module.exports = nextConfig;
