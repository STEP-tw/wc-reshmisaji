const assert = require("assert");
const { parser, getParsed } = require("../src/handleInputs.js");

describe("parse", function() {
  it("should return an object with keys option and files", function() {
    let arguments = ["sample"];
    let expectedOutput = { option: "default", files: ["sample"] };
    let actualOutput = parser(arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an object with keys option and files", function() {
    let arguments = ["-l", "sample"];
    let expectedOutput = { option: "l", files: ["sample"] };
    let actualOutput = parser(arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("getParsed", function() {
  it("should return an object with option and files when given possible option as file name and arguments", function() {
    let possibleOption = "sample";
    let arguments = ["sample"];
    let expectedOutput = { option: "default", files: ["sample"] };
    let actualOutput = getParsed(possibleOption, arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an object with option and files when given possible option as '-l' and arguments", function() {
    let possibleOption = "-l";
    let arguments = ["-l", "sample"];
    let expectedOutput = { option: "l", files: ["sample"] };
    let actualOutput = getParsed(possibleOption, arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
