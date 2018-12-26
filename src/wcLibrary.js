const NEWLINE = "\n";
const TAB = "\t";
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

const getWordCount = function(contents) {
  let data = contents.split(NEWLINE);
  data = data.join(SPACE);
  let words = data.split(SPACE);
  let wordsWithoutSpace = removeEmptyStrings(words);

  return wordsWithoutSpace.length;
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
  getLineCount,
  getCharacterCount,
  getWordCount,
  isNonEmpty,
  removeEmptyStrings,
  formatOutput,
  wc
};
