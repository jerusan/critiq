const path = require("path");

module.exports = {
  entry: {
    content: "./src/chrome-scripts/content.tsx",
    background: "./src/chrome-scripts/background.ts",
  },
  output: {
    path: path.resolve(__dirname, "./extension"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
