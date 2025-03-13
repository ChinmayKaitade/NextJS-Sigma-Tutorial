/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
