/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
  env: {
    notionKey: process.env.NOTION_TOKEN,
    databaseId: process.env.DATABASE_ID,
  },
};

module.exports = nextConfig;
