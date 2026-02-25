/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nanosocials.com',
      },
      {
        protocol: 'http',
        hostname: 'nanosocials.com',
      },
    ],
  },
};

export default nextConfig;
