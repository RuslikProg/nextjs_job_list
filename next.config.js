/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '//picsum.photos/200/300',
        port: '',
        pathname: '/200/300',
      },
    ],
  },
}

module.exports = nextConfig
// "https://picsum.photos/200/300"