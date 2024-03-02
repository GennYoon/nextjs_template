/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      { source: "/api/:path*", destination: "http://localhost:5000/:path*" },
    ];
  },
};

export default nextConfig;
