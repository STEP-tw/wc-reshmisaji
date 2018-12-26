const NEWLINE = "\n";
const SPACE = " ";

const getLineCount = function(contents) {
  let data = contents.split(NEWLINE);
  return data.length - 1;
};

const getCharacterCount = function(contents) {
  return contents.length;
};

const isNonEmpty = function(data) {
  return data != "";
};

const removeEmptyStrings = function(contents) {
  return contents.filter(isNonEmpty);
};

const getWordCount = function(contents) {
  let data = contents.split(NEWLINE);
  data = data.join(SPACE);
  let words = data.split(SPACE);
  let wordsWithoutSpace = removeEmptyStrings(words);

  return wordsWithoutSpace.length;
};

module.exports = {
  getLineCount,
  getCharacterCount,
  getWordCount,
  isNonEmpty,
  removeEmptyStrings
};
