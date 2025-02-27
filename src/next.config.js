const path = require('path');
const withCSS = require('@zeit/next-css');

const projectRoot = path.join(__dirname);

module.exports = withCSS({
  distDir: '../_next',
  env: {
    useMockData: process.env.NODE_ENV === 'useMock',
  },
  webpack(config) {
    const alias = config.resolve.alias;
    alias['components'] = path.join(projectRoot, 'components');
    alias['foundation'] = path.join(projectRoot, 'components/foundation');
    alias['modules'] = path.join(projectRoot, 'modules');
    alias['store'] = path.join(projectRoot, 'store');
    return config;
  },
});
