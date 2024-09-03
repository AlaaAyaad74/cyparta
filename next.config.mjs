/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login", // Adjust this path if your login folder is nested differently
        permanent: true, // Set this to false if you prefer a temporary redirect
      },
    ];
  },
};

export default nextConfig;
