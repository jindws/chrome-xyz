const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    popup: "./js/popup/index.tsx",
    background: "./js/background/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.gif$/,
        exclude: /node-modules/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx"],
  },
};
