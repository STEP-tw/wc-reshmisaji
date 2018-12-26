const assert = require("assert");
const { formatOutput, wc } = require("../src/wcLibrary.js");

const fs = {
  readFileSync: function(fileName) {
    return this[fileName];
  },
  sample: "1 2 a"
};

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

describe("wc", function() {
  it("should return lineCount,wordCount,characterCount and fileName", function() {
    let fileName = "sample";
    let expectedOutput = "\t0\t3\t5 sample";
    let actualOutput = wc(fileName, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
