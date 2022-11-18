/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // future: {webpack5: true},
  images: {
    domains: ['links.papareact.com','freepik.com']
  }
}

module.exports = nextConfig
