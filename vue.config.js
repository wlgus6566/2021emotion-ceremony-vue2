const path = require('path');

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    overlay: false,
    disableHostCheck: true,
    proxy: {
      '/getMemberContents': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getSurvey': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getRanPhoto': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getAllMemberCardImage': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getMemberCardImage': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getMbti': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/postVotes': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getAllPhoto': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getRandomMemberTen': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
      '/getVotes': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
};
