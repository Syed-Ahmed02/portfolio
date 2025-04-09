import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Or 'https'
        hostname: 'localhost', // Or your domain name
        port: '3000', // Or the port your app runs on (if non-standard)
        pathname: '/api/media/file/**', // Allow images from this path
      },
      // Add other patterns if needed
    ],
  },};

export default withPayload(nextConfig);
