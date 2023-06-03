/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  env: {
    notionKey: process.env.NOTION_TOKEN,
    databaseId: process.env.DATABASE_ID,
  },
};

module.exports = nextConfig;
