/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pr-agent.media", // www eklendi
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/**",
      },
    ],
  },
};

module.exports = nextConfig;
