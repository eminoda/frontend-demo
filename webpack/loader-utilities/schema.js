const { urlToRequest } = require("loader-utils");
const { validate } = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    test: {
      type: "string",
    },
  },
  additionalProperties: true,
};

try {
  validate(
    schema,
    // { test: "abc" },
    { test: 123 },
    {
      name: "Example Loader",
      baseDataPath: "options",
    }
  );
} catch (error) {
  console.log(error);
}
