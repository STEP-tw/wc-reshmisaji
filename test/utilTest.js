const assert = require("assert");

const {
  getLineCount,
  getCharacterCount,
  getWordCount,
  isNonEmpty,
  removeEmptyStrings,
  getContents
} = require("../src/util.js");

const fs = {
  readFileSync: function(fileName) {
    return this[fileName];
  },
  sample: "1 2 a"
};

describe("getLineCount", function() {
  it("should return 1 when given an empty string", function() {
    assert.deepEqual(getLineCount(""), 0);
  });

  it("should return 2 when given a contents with 1 '\n'", function() {
    assert.deepEqual(getLineCount("a\nb"), 1);
  });
  it("should return 2 when given a string with '\n'", function() {
    assert.deepEqual(getLineCount("\n"), 1);
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

describe("getContents", function() {
  it("should return the contents of the file", function() {
    let file = "sample";
    let expectedOutput = "1 2 a";
    let actualOutput = getContents(file, fs);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
