
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'js/bundle.[contenthash].js',
    path:path.resolve(__dirname,'./dist'),
    assetModuleFilename: './images/[hash][name][query]'
  },
  mode:'none',
  module: {
  
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
    
  },
 
  plugins:[
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename:"css/bundle.[contenthash].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:"login.html",
      template:"./src/pages/login.html"
    }),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"index.html"
    }),
    
    
  ]
}
