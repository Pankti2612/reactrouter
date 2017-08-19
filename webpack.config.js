var watch = require('watchpack');

module.exports = {
  entry: {
    "main" :'./src/index.js'
  },
  output: {
    path: "./dist",
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    exclude: /node_modules/,
    loaders: [
      {
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx',".css", ".scss", ".less", ".styl"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};