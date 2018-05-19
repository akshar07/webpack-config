//webpack.config.js
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "production"),
    filename: "[hash]-[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000000, // Convert svg's < 1mb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
