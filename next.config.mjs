import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cache Components temporarily disabled due to PayloadCMS compatibility issues
  // TODO: Re-enable when PayloadCMS supports Next.js 16 Cache Components
  // cacheComponents: true,
  
  // Empty turbopack config to silence webpack/turbopack warnings
  turbopack: {},
  
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Exclude test files from thread-stream and other test modules
    webpackConfig.module.rules.push({
      test: /node_modules.*\.test\.(js|mjs|ts)$/,
      use: 'ignore-loader',
    })

    // Add ignore-loader fallback
    webpackConfig.resolve.fallback = {
      ...webpackConfig.resolve.fallback,
      tap: false,
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
