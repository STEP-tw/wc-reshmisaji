const assert = require("assert");
const {
  parser,
  getOptionsParsed,
  formatOutput
} = require("../src/handleIO.js");

describe("parser", function() {
  it("should return an object with keys option and files when given without option", function() {
    let arguments = ["sample"];
    let expectedOutput = { option: "lwc", files: ["sample"] };
    let actualOutput = parser(arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an object with keys option and files when given single option", function() {
    let arguments = ["-l", "sample"];
    let expectedOutput = { option: "l", files: ["sample"] };
    let actualOutput = parser(arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an object with keys option and files when multiple options are passed", function() {
    let arguments = ["-l",'-c', "sample"];
    let expectedOutput = { option: "lc", files: ["sample"] };
    let actualOutput = parser(arguments);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("getOptionsParsed", function() {
  it("should return an object with option and files when given possible option as file name and arguments", function() {
    let possibleOption = ["-l"];
    let expectedOutput = "l";
    let actualOutput = getOptionsParsed(possibleOption);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an object with option and files when given possible option as '-l' and arguments", function() {
    let possibleOption = ["-l", "-c"];
    let expectedOutput = "lc";
    let actualOutput = getOptionsParsed(possibleOption);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("formatOutput", function() {
  it("should return the result with lineCount,wordCount,characterCount and fileName", function() {
    let fileName = "sample.txt";
    let counts = [1, 2, 3];
    let expectedOutput = "\t1\t2\t3 sample.txt";
    let actualOutput = formatOutput(counts, fileName);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
