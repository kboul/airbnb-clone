/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow pictures from this domain
    domains: ["links.papareact.com"]
  }
};

module.exports = nextConfig;
