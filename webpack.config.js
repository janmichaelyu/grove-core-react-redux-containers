const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'grove-core-react-redux-containers',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    '@marklogic-community/grove-core-react-components':
      '@marklogic-community/grove-core-react-components',
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-3']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
