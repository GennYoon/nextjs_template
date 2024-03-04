/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  rewrites: () => {
    return [{ source: "/api/:path*", destination: "http://localhost:5000/:path*" }];
  },
};

export default nextConfig;
