/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }


  const withPWA = require("next-pwa");
  const runtimeCaching = require("next-pwa/cache");
  
  module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      runtimeCaching,
      buildExcludes: [/manifest.json$/]
    },
 
    images: {
      loader: 'akamai',
      path: '',
    },
  });

// module.exports = nextConfig
