/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    localeDetection: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pr-agent.media",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
};

module.exports = nextConfig;
