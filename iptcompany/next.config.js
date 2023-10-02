/** @type {import('next').NextConfig}*/
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'ui.glass',
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**/**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
}

module.exports = nextConfig
