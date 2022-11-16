/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com','freepik.com']
  },
  reactStrictMode: true,
  swcMinify: true,
  future: {webpack5: true}
}

module.exports = nextConfig
