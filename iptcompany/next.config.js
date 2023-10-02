/** @type {import('next').NextConfig} 
 * i.pinimg.com
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
        ],
    },
}

module.exports = nextConfig
