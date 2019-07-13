const set = require('lodash.set');
module.exports = {
  webpack: (config, options) => {
    set(config, 'node.__dirname', false);
    return config;
  },
};
