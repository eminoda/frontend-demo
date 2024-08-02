// https://github.com/webpack-contrib/webpack-defaults/blob/master/templates/src/index.js
// getOptions 已经废除
// const { urlToRequest, getOptions } = require("loader-utils");
const { urlToRequest } = require("loader-utils");
const { validate } = require("schema-utils");
const path = require("path");

module.exports = function loader(source, map, meta) {
  console.log("loader-one...", meta);
  const { version, webpack } = this;

  const options = this.getOptions();
  console.log(options);

  this.addDependency(path.resolve("assets/hello.json"));

  // 参数校验
  validate(
    {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        version: {
          type: "string",
        },
      },
      additionalProperties: false,
    },
    options,
    {
      name: "DemoLoaderSchema",
      baseDataPath: "options",
    }
  );

  const newSource = `
    /** Transform By OneLoader */
    ${source}`;

  return `${newSource}`;
};

module.exports.pitch = (remainingRequest, precedingRequest, data) => {
  console.log("one pitch");
};
