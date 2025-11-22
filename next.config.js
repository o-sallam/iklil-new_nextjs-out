const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/iklil-new_nextjs-out' : '',
  assetPrefix: isProd ? '/iklil-new_nextjs-out/' : '',
};
