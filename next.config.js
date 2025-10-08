/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { theme: "DEFAULT", currency: "USD" },
  publicRuntimeConfig: { theme: "DEFAULT", currency: "USD" },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-lib.com"
      },
      {
        protocol: "https",
        hostname: "cdn.huythanhjewelry.vn"
      },
      {
        protocol: "https",
        hostname: "file.hstatic.net"
      },
      {
        protocol: "https",
        hostname: "cdn.pnj.io"
      },
      {
        protocol: "https",
        hostname: "bizweb.dktcdn.net"
      },
      {
        protocol: "https",
        hostname: "qr.sepay.vn"
      },
      {
        protocol: "https",
        hostname: "my.sepay.vn"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      },
      // api.vietqr.io
        {
        protocol: "https",
        hostname: "api.vietqr.io"
        }
    ]
  },
};

module.exports = nextConfig;