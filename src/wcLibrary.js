const {
  getLineCount,
  getWordCount,
  getCharacterCount,
  getContents
} = require("../src/util.js");
const {
  formatOutput,
  parser,
  getIndividualOutputs
} = require("../src/handleIO.js");

const wc = function(filePath, fs) {
  let { option, files } = parser(filePath);
  let contents = getContents(files[0], fs);
  let numberOfLines = getLineCount(contents);
  let numberOfCharacters = getCharacterCount(contents);
  let numberOfWords = getWordCount(contents);

  let result = {
    default: formatOutput(
      numberOfLines,
      numberOfWords,
      numberOfCharacters,
      files[0]
    ),
    l: getIndividualOutputs(numberOfLines, files[0]),
    w: getIndividualOutputs(numberOfWords, files[0]),
    c: getIndividualOutputs(numberOfCharacters, files)
  };

  return result[option];
};

module.exports = {
  formatOutput,
  wc
};
