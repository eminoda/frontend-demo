const path = require("path");

module.exports = {
  //...
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve("loader-one.js"),
            options: {
              version: "1.0.1",
            },
          },
          {
            loader: path.resolve("loader-two.js"),
            options: {
              version: "1.0.1",
            },
          },
        ],
      },
    ],
  },
};
