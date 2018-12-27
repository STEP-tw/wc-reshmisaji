const {
  getLineCount,
  getWordCount,
  getCharacterCount,
  getContents
} = require("../src/util.js");
const { formatOutput, parser } = require("../src/handleIO.js");

const getCounts = function(contents) {
  let numberOfLines = getLineCount(contents);
  let numberOfCharacters = getCharacterCount(contents);
  let numberOfWords = getWordCount(contents);
  return [numberOfLines, numberOfWords, numberOfCharacters];
};

const getRequired = function(allCounts, option) {
  let resultCount = [];
  if (option.includes("l")) {
    resultCount.push(allCounts[0]);
  }
  if (option.includes("w")) {
    resultCount.push(allCounts[1]);
  }
  if (option.includes("c")) {
    resultCount.push(allCounts[2]);
  }
  return resultCount;
};

const wc = function(filePath, fs) {
  let { option, files } = parser(filePath);
  let contents = getContents(files[0], fs);
  let allCounts = getCounts(contents);
  let counts = getRequired(allCounts, option);

  let result = formatOutput(counts, files[0]);

  return result;
};

module.exports = {
  getCounts,
  wc
};
