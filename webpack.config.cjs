const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  devtool: "source-map", // or 'inline-source-map'

  entry: {
    main: "./src/index.jsx",
    table: "./src/table.jsx",
    mantine_ex: "./src/mantine_ex/tt.jsx",
    UI: "./src/UI/main.jsx",
    test: "./src/test/main.jsx",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Added .jsx
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"], // Specify the chunks for this HTML file
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/table.html",
      chunks: ["table"], // Specify the chunks for this HTML file
      filename: "table.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/mantine_ex/tt.html",
      chunks: ["mantine_ex"], // Specify the chunks for this HTML file
      filename: "mantine_ex/tt.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/UI/index.html",
      chunks: ["UI"], // Specify the chunks for this HTML file
      filename: "UI/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/test/index.html",
      chunks: ["test"], // Specify the chunks for this HTML file
      filename: "test/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
