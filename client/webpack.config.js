const path = require("path");

module.exports = {
  context: path.resolve(__dirname),
  entry: "./app/index.tsx",
  output: {
    path: __dirname + "/public",
    filename: "build/app.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  }
};
