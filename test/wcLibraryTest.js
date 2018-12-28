const assert = require("assert");
const {
  wc,
  getCounts,
  getWordCount,
  getContents,
  getWords,
  getRequired,
  getContentDetails,
  addDetails,
  addCounts,
  hasMultipleFiles
} = require("../src/wcLibrary.js");

const fs = {
  readFileSync: function(fileName) {
    return this[fileName];
  },
  sample: "1 2 a",
  sampleNumbers: "1 2"
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
  describe("single Files", function() {
    it("should return lineCount,wordCount,characterCount and fileName", function() {
      let parsedArgs = { option: "lwc", files: ["sample"] };
      let expectedOutput = "\t0\t3\t5 sample";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
      let parsedArgs = { option: "-l", files: ["sample"] };
      let expectedOutput = "\t0 sample";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
      let parsedArgs = { option: "-w", files: ["sample"] };
      let expectedOutput = "\t3 sample";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
      let parsedArgs = { option: "-c", files: ["sample"] };
      let expectedOutput = "\t5 sample";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe("multiple Files", function() {
    it("should return lineCount,wordCount,characterCount and fileName", function() {
      let parsedArgs = { option: "lcw", files: ["sample", "sampleNumbers"] };
      let expectedOutput =
        "\t0\t3\t5 sample\n\t0\t2\t3 sampleNumbers\n\t0\t5\t8 total";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
      let parsedArgs = { option: "-l", files: ["sample", "sampleNumbers"] };
      let expectedOutput = "\t0 sample\n\t0 sampleNumbers\n\t0 total";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
      let parsedArgs = { option: "-w", files: ["sample", "sampleNumbers"] };
      let expectedOutput = "\t3 sample\n\t2 sampleNumbers\n\t5 total";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return lineCount,wordCount,characterCount and fileName when given options", function() {
      let parsedArgs = { option: "-c", files: ["sample", "sampleNumbers"] };
      let expectedOutput = "\t5 sample\n\t3 sampleNumbers\n\t8 total";
      let actualOutput = wc(parsedArgs, fs);

      assert.deepEqual(actualOutput, expectedOutput);
    });
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

describe("getRequired", function() {
  it("should return get the required counts as per the options", function() {
    let options = "lcw";
    let counts = [1, 2, 3];
    let actualOutput = getRequired(counts, options);
    let expectedOutput = [1, 2, 3];

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return get the required counts as per the options", function() {
    let options = "lw";
    let counts = [1, 2, 3];
    let actualOutput = getRequired(counts, options);
    let expectedOutput = [1, 2];

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return get the required counts as per the options", function() {
    let options = "cw";
    let counts = [1, 2, 3];
    let actualOutput = getRequired(counts, options);
    let expectedOutput = [2, 3];

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return get the required counts as per the options", function() {
    let options = "w";
    let counts = [1, 2, 3];
    let actualOutput = getRequired(counts, options);
    let expectedOutput = [2];

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("getContentDetails", function() {
  it("should return the details about the file including file name", function() {
    let options = "lcw";
    let fileName = "sample";
    let actualOutput = getContentDetails(options, fs, fileName);
    let expectedOutput = [[0, 3, 5], "sample"];

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return the details about the file including file name", function() {
    let options = "lw";
    let fileName = "sample";
    let actualOutput = getContentDetails(options, fs, fileName);
    let expectedOutput = [[0, 3], "sample"];

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return the details about the file including file name", function() {
    let options = "w";
    let fileName = "sample";
    let actualOutput = getContentDetails(options, fs, fileName);
    let expectedOutput = [[3], "sample"];

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("addDetails", function() {
  it("should return all the counts and fileName", function() {
    let contentDetails = [[0, 3, 5], "sample"];
    let actualOutput = addDetails(contentDetails);
    let expectedOutput = "\t0\t3\t5 sample";

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("addCounts", function() {
  it("should return the total count of all the elememts of two arrays", function() {
    let firstCounts = [1, 2, 3];
    let secondCount = [2, 4, 6];
    let actualOutput = addCounts(firstCounts, secondCount);
    let expectedOutput = [3, 6, 9];

    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe("hasMultipleFiles", function() {
  it("should return false when given an array with one element", function() {
    let files = ["sample"];
    let expectedOutput = false;
    let actualOutput = hasMultipleFiles(files);

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it("should return true when given an array with more than one element", function() {
    let files = ["sample", "test"];
    let expectedOutput = true;
    let actualOutput = hasMultipleFiles(files);

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
