const assert = require("assert");
const { wc } = require("../src/wcLibrary.js");

const fs = {
  readFileSync: function(fileName) {
    return this[fileName];
  },
  sample: "1 2 a"
};

describe("wc", function() {
  it("should return lineCount,wordCount,characterCount and fileName", function() {
    let fileName = ["sample"];
    let expectedOutput = "\t0\t3\t5 sample";
    let actualOutput = wc(fileName, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
    let fileName = ["-l", "sample"];
    let expectedOutput = "\t0 sample";
    let actualOutput = wc(fileName, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
    let fileName = ["-w", "sample"];
    let expectedOutput = "\t3 sample";
    let actualOutput = wc(fileName, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
    let fileName = ["-c", "sample"];
    let expectedOutput = "\t5 sample";
    let actualOutput = wc(fileName, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
