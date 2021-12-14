module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/list/1',
        permanent: true,
      },
    ];
  },
};
