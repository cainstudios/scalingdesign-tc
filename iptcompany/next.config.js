/** @type {import('next').NextConfig} 
 * i.pinimg.com i.postimg.cc
*/
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
        ],
    },
}

module.exports = nextConfig
