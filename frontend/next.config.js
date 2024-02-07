/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.wikimedia.org',
            },
        ],
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'www.google.com'],
    },
}

module.exports = nextConfig
