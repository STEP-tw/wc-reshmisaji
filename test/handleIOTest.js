const assert = require("assert");
const {
  parser,
  getParsed,
  formatOutput,
  parseWithOption
} = require("../src/handleIO.js");

describe("parse", function() {
  it("should return an object with keys option and files", function() {
    let arguments = ["sample"];
    let expectedOutput = { option: "lwc", files: ["sample"] };
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
    let expectedOutput = { option: "lwc", files: ["sample"] };
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
    let counts = [1, 2, 3];
    let expectedOutput = "\t1\t2\t3 sample.txt";
    let actualOutput = formatOutput(counts, fileName);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("parseWithOption", function() {
  it("should return an object with option and the files", function() {
    let firstArg = "-a";
    let args = ["-a", "sample"];
    let actualOutput = parseWithOption(firstArg, args);
    let expectedOutput = { option: "a", files: ["sample"] };

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an object with combination options and the files", function() {
    let firstArg = "-lw";
    let args = ["-lw", "sample"];
    let actualOutput = parseWithOption(firstArg, args);
    let expectedOutput = { option: "lw", files: ["sample"] };

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
