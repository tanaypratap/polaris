const path = require("path");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  context: path.resolve(__dirname),
  entry: "./app/index.tsx",
  output: {
    path: __dirname + "/public",
    filename: "build/app.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer]
          })
        }
      }
    ]
  }
};
