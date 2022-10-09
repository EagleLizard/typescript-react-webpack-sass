/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'public');

module.exports = (env, argv) => {
  let webpackConfig;

  const isDevelopment = argv.mode !== 'production';

  const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  });
  const miniCssExtractPlugin = new MiniCssExtractPlugin();
  const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin();

  webpackConfig = {
    entry: path.resolve(__dirname, 'src/main.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: DIST_DIR,
      clean: true,
    },
    watch: isDevelopment ? true : false,
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      },
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
      contentBase: DIST_DIR,
      historyApiFallback: true,
      hot: true,
      open: true,
      host: '0.0.0.0',
      port: 9420,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: { importLoaders: 2 }, // tell that you are running your styles through two other loaders before this one
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom')
      },
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.css',
      ],
    },
    plugins: [
      htmlPlugin,
      miniCssExtractPlugin,
      forkTsCheckerWebpackPlugin,
    ],
  };

  return webpackConfig;
};
