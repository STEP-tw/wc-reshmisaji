const assert = require("assert");
const {
  wc,
  getCounts,
  getWordCount,
  getContents,
  getWords
} = require("../src/wcLibrary.js");

const fs = {
  readFileSync: function(fileName) {
    return this[fileName];
  },
  sample: "1 2 a"
};

describe("getWordCount", function() {
  it("should return 0 when given a space", function() {
    assert.deepEqual(getWordCount(""), 0);
  });
});

describe("getContents", function() {
  it("should return the contents of the file", function() {
    let file = "sample";
    let expectedOutput = "1 2 a";
    let actualOutput = getContents(file, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

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

describe("getCounts", function() {
  it("should return an object with the line count, word count and the character count", function() {
    let contents = "1 a 2";
    let actualOutput = getCounts(contents);
    let expectedOutput = [0, 3, 5];

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("getWords", function() {
  it("should return the words of the string as an array", function() {
    let contents = "a b  c 1";
    let expectedOutput = ["a", "b", "", "c", "1"];
    let actualOutput = getWords(contents);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
