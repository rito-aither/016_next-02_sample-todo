/** @type {import('next').NextConfig} */
const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://express-container:3001/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
