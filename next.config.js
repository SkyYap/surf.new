/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL || "http://127.0.0.1:8000"}/api/:path*`,
      },
      {
        source: "/docs",
        destination: `${process.env.API_URL || "http://127.0.0.1:8000"}/docs`,
      },
      {
        source: "/openapi.json",
        destination: `${process.env.API_URL || "http://127.0.0.1:8000"}/openapi.json`,
      },
    ];
  },
};

module.exports = nextConfig;
