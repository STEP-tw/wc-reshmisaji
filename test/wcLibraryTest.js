const assert = require("assert");
const { wc, getResult, getCounts } = require("../src/wcLibrary.js");

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

describe("getResult", function() {
  it("should return an object with the output as per the option", function() {
    let lineCount = 1;
    let wordCount = 2;
    let characterCount = 5;
    let fileName = "sample";
    let actualOutput = getResult(
      lineCount,
      wordCount,
      characterCount,
      fileName
    );
    let expectedOutput = {
      default: "\t1\t2\t5 sample",
      l: "\t1 sample",
      w: "\t2 sample",
      c: "\t5 sample",
      lw: "\t1\t2 sample",
      lc: "\t1\t5 sample",
      wc: "\t2\t5 sample",
      wl: "\t2\t1 sample",
      cw: "\t5\t2 sample",
      cl: "\t5\t1 sample"
    };

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("getCounts", function() {
  it("should return an object with the line count, word count and the character count", function() {
    let contents = "1 a 2";
    let actualOutput = getCounts(contents);
    let expectedOutput = {
      numberOfLines: 0,
      numberOfWords: 3,
      numberOfCharacters: 5
    };

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
