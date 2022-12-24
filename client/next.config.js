/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:['ish-bor.uz','it-market.uz' ]
  },
  env: {
    customKey: 'http://localhost:5000/api/',
  },
}

module.exports = nextConfig


