// https://github.com/webpack-contrib/webpack-defaults/blob/master/templates/src/index.js
// getOptions 已经废除
// const { urlToRequest, getOptions } = require("loader-utils");
const { urlToRequest } = require("loader-utils");
const { validate } = require("schema-utils");

module.exports = function loader(source) {
  console.log("loader-two...");
  const { version, webpack } = this;

  const options = this.getOptions();

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
    /** Transform By TwoLoader */
    ${source}`;

  //   return `${newSource}`;
  this.callback(null, newSource, null, {
    foo: "hello from TwoLoader",
  });
};
module.exports.pitch = (remainingRequest, precedingRequest, data) => {
  console.log("two pitch");
  return "123";
};
