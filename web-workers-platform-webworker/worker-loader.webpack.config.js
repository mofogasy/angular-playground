const path = require('path');

const config = {
  entry: './src/workerLoader.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: [ '.ts', '.tsx', ".js", ".json"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webworker.bundle.js'
  }
};

module.exports = config;
