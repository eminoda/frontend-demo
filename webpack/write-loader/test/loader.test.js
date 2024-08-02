/**
 * @jest-environment node
 */
import { version } from "webpack";
import compiler from "./compiler.js";

test("Inserts name and outputs JavaScript", async () => {
  const stats = await compiler({ version: "1.0.1" });

  const output = stats.toJson({ source: true }).modules[0].source;
  console.log("---", output);
  expect(output).toContain("OneLoader");
  expect(output).toContain("TwoLoader");
});
