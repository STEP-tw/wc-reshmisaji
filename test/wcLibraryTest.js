const assert = require("assert");
const {
  getLineCount,
  getCharacterCount,
  getWordCount,
  isNonEmpty,
  removeEmptyStrings,
  formatOutput
} = require("../src/wcLibrary.js");

describe("getLineCount", function() {
  it("should return 1 when given an empty string", function() {
    assert.deepEqual(getLineCount(""), 1);
  });

  it("should return 2 when given a contents with 1 \n", function() {
    assert.deepEqual(getLineCount("a\nb"), 2);
  });
  it("should return 2 when given a string with \n", function() {
    assert.deepEqual(getLineCount("\n"), 2);
  });
});

describe("getCharacterCount", function() {
  it("should return 0 when given an empty string", function() {
    assert.deepEqual(getCharacterCount(""), 0);
  });

  it("should return 1 when given a string with a character", function() {
    assert.deepEqual(getCharacterCount("a"), 1);
  });
});

describe("getWordCount", function() {
  it("should return 0 when given a space", function() {
    assert.deepEqual(getWordCount(""), 0);
  });
});

describe("isNonEmpty", function() {
  it("should return false when given an empty string", function() {
    assert.deepEqual(isNonEmpty(""), false);
  });

  it("should return true when given a string non empty string", function() {
    assert.deepEqual(isNonEmpty("a"), true);
  });
});

describe("removeEmptyStrings", function() {
  it("should return an empty array when given empty string", function() {
    let contents = [""];
    let expectedOutput = [];
    let actualOutput = removeEmptyStrings(contents);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return an array of non empty string when given an array with both empty and non empty string", function() {
    let contents = ["a", ""];
    let expectedOutput = ["a"];
    let actualOutput = removeEmptyStrings(contents);

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
