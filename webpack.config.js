require('dotenv').config();
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: 'source-map',
    devServer: {
      port: 8080,
      open: true,
      compress: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot:true,
      liveReload: true,
      watchFiles: ['src/**/*.js','public/**/*'],
    },
    entry: {
      main: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env'],
              }
            }
          }
        ]
    },
    plugins: [
                isDevelopment && new ReactRefreshPlugin(),
                new HtmlWebpackPlugin({
                  filename: './index.html',
                  template: './public/index.html',
                }),
              ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
}