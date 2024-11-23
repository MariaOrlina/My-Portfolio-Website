/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keeps React strict mode enabled
  output: 'standalone', // Optimizes for deployment platforms like Vercel or Docker
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index', // Adjust based on your root directory
        permanent: true,
      },
    ];
  },
  webpack(config) {
    // Custom Webpack configuration to resolve aliases and unused modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname, // Optional alias for root-level imports
    };
    return config;
  },
};

module.exports = nextConfig;
