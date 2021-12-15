const path = require('path');

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
  },
  devServer: {
    port: 8080,
    overlay: false,
    disableHostCheck: true,
    proxy: {
      '/b2c/api': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
};
