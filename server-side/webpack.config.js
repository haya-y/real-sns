// const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: './src/server.ts',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  // devServer: {
  //   port: 4000,
  //   historyApiFallback: true,
  //   static: {
  //     directory: path.resolve(__dirname, 'dist'),
  //     publicPath: '/',
  //     watch: true,
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  // node: {
  //   __dirname: false,
  //   __filename: false,
  // },
};
