const assert = require("assert");
const { parser, getParsed, formatOutput } = require("../src/handleIO.js");

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

describe("formatOutput", function() {
  it("should return the result with lineCount,wordCount,characterCount and fileName", function() {
    let fileName = "sample.txt";
    let wordCount = 2;
    let lineCount = 1;
    let characterCount = 3;
    let expectedOutput = "\t1\t2\t3 sample.txt";
    let actualOutput = formatOutput(
      lineCount,
      wordCount,
      characterCount,
      fileName
    );

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
