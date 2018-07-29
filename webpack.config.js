const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          },
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http:localhost:8080'
    }
  }
};