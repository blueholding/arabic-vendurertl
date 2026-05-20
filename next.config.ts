import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    cacheComponents: true,
    images: {
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dash.souqedku.com',
            },
            {
                protocol: 'https',
                hostname: 'souqedku.com',
            },
            {
                protocol: 'https',
                hostname: 'readonlydemo.vendure.io',
            },
            {
                protocol: 'https',
                hostname: 'demo.vendure.io',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
    experimental: {
        rootParams: true
    }
};

export default withNextIntl(nextConfig);
