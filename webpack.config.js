module.exports = {
  mode: 'development',
  entry: {
    app: ['./movie-ticketing/app.js', './movie-ticketing/app.config.js', './movie-ticketing/app.constant.js'],
  },
  output: {
    filename: 'app.bundle.js',
  },
  resolve: {
    alias: {
    },
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: ['html-loader'],
      },
      {
        test: /\.js$/,
        loader: 'required-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    port: 3000,
    contentBase: './',
  },
};
