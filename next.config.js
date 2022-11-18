/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // feature: {webpack5: true},
  images: {
    domains: ['links.papareact.com','freepik.com']
  }
}

module.exports = nextConfig
