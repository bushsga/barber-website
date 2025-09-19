 import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // IGNORES ALL TYPESCRIPT ERRORS
  },
  eslint: {
    ignoreDuringBuilds: true, // IGNORES ALL ESLINT ERRORS
  },
}

export default nextConfig
