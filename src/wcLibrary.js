const {
  getLineCount,
  getCharacterCount,
  removeEmptyStrings
} = require("../src/util.js");
const { formatOutput, parser } = require("../src/handleIO.js");

const NEWLINE = "\n";
const SPACE = " ";

const getWords = function(contents) {
  let data = contents.split(NEWLINE);
  data = data.join(SPACE);
  let words = data.split(SPACE);
  return words;
};

const getWordCount = function(contents) {
  let words = getWords(contents);
  let wordsWithoutSpace = removeEmptyStrings(words);

  return wordsWithoutSpace.length;
};

const getContents = function(filePath, fs) {
  return fs.readFileSync(filePath, "utf8");
};

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

module.exports = { getWords, getWordCount, getContents, getCounts, wc };
