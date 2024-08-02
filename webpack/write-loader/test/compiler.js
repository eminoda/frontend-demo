import path from "path";
import webpack from "webpack";
import { createFsFromVolume, Volume } from "memfs";

export default (options = {}) => {
  const compiler = webpack({
    context: path.resolve(__dirname, "../src"),
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: path.resolve(__dirname, "../src/loader-one.js"),
              options,
            },
            {
              loader: path.resolve(__dirname, "../src/loader-two.js"),
              options,
            },
          ],
        },
      ],
    },
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());
  compiler.outputFileSystem.join = path.join.bind(path);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(stats.toJson().errors);

      resolve(stats);
    });
  });
};
