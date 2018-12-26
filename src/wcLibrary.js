const {
  getLineCount,
  getWordCount,
  getCharacterCount
} = require("../src/util.js");

const TAB = "\t";
const SPACE = " ";

const formatOutput = function(
  numberOfLines,
  numberOfWords,
  numberOfCharacters,
  filePath
) {
  return (
    TAB +
    numberOfLines +
    TAB +
    numberOfWords +
    TAB +
    numberOfCharacters +
    SPACE +
    filePath
  );
};

const wc = function(filePath, fs) {
  let contents = fs.readFileSync(filePath, "utf8");
  let numberOfLines = getLineCount(contents);
  let numberOfCharacters = getCharacterCount(contents);
  let numberOfWords = getWordCount(contents);

  return formatOutput(
    numberOfLines,
    numberOfWords,
    numberOfCharacters,
    filePath
  );
};

module.exports = {
  formatOutput,
  wc
};
