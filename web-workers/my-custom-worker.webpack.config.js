const path = require('path');

const config = {
  entry: './play_around/worker.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist', 'worker'),
    filename: 'worker.js'
  }
};

module.exports = config;
