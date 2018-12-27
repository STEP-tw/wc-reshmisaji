const NEWLINE = "\n";

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

module.exports = {
  getLineCount,
  getCharacterCount,
  isNonEmpty,
  removeEmptyStrings
};
