const path = require('path');

module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config
    config.resolve = {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        utilities: path.resolve(__dirname, 'src', 'utilities'),
      }
    }
    config.module = {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"]
        }
      ],
    }
    return config
  }
}