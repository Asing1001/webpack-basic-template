const path = require('path');
const webpack = require('webpack')
const config = require("config")
const fs = require('fs')

fs.writeFileSync(path.resolve(__dirname, 'dist/config.json'), JSON.stringify(config))

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, 'dist/config.json')
    }
  },
  plugins: [
    new webpack.DefinePlugin({ CONFIG: JSON.stringify(config) })
  ]
};
