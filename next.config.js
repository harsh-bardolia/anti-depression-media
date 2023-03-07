/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // future: {webpack5: true},
  images: {
    domains: ['links.papareact.com','freepik.com','media-exp1.licdn.com','media.licdn.com','lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
