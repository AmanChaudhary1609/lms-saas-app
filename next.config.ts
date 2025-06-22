import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
  images: {
      remotePatterns: [
          { hostname: 'img.clerk.com'}
      ]
  }
};

export default withSentryConfig(nextConfig, {


org: "amans-org",
project: "lms-saas",

silent: !process.env.CI,


widenClientFileUpload: true,


disableLogger: true,


automaticVercelMonitors: true,
});