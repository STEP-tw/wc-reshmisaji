const {
  getLineCount,
  getWordCount,
  getCharacterCount,
  getContents
} = require("../src/util.js");
const {
  formatOutput,
  parser,
  getIndividualOutputs,
  getCombinations
} = require("../src/handleIO.js");

const getResult = function(
  numberOfLines,
  numberOfWords,
  numberOfCharacters,
  file
) {
  return {
    default: formatOutput(
      numberOfLines,
      numberOfWords,
      numberOfCharacters,
      file
    ),
    l: getIndividualOutputs(numberOfLines, file),
    w: getIndividualOutputs(numberOfWords, file),
    c: getIndividualOutputs(numberOfCharacters, file),
    lw: getCombinations(numberOfLines, numberOfWords, file),
    lc: getCombinations(numberOfLines, numberOfCharacters, file),
    wc: getCombinations(numberOfWords, numberOfCharacters, file),
    wl: getCombinations(numberOfLines, numberOfWords, file),
    cw: getCombinations(numberOfWords, numberOfCharacters, file),
    cl: getCombinations(numberOfLines, numberOfCharacters, file)
  };
};

const getCounts = function(contents) {
  let numberOfLines = getLineCount(contents);
  let numberOfCharacters = getCharacterCount(contents);
  let numberOfWords = getWordCount(contents);
  return { numberOfLines, numberOfWords, numberOfCharacters };
};

const wc = function(filePath, fs) {
  let { option, files } = parser(filePath);
  let contents = getContents(files[0], fs);
  let { numberOfLines, numberOfWords, numberOfCharacters } = getCounts(
    contents
  );

  let result = getResult(
    numberOfLines,
    numberOfWords,
    numberOfCharacters,
    files[0]
  );

  return result[option];
};

module.exports = {
  getCounts,
  wc,
  getResult
};
