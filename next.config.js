/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.medexsepeti.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
