const assert = require("assert");
const { parse } = require("../src/handleInputs.js");

describe("parse", function() {
  it("should return an object with keys option and files", function() {
    let arguments = ["sample"];
    let expectedOutput = { option: "default", files: "sample" };
    let actualOutput = parse(arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
