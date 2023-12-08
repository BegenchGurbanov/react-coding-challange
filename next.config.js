/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
    //remotePatterns: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
