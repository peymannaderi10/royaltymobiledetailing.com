/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.stevesautointerior.com',
          },
        ],
        destination: 'https://stevesautointerior.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      // Long-term caching for images (no regex capturing groups)
      {
        source: '/:path*.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.jpeg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.gif',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.avif',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.bmp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.tif',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/:path*.tiff',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
    ]
  },
}

export default nextConfig
