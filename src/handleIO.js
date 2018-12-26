const TAB = "\t";
const SPACE = " ";

const parseWithOption = function(firstArg, args) {
  return { option: firstArg.slice(1), files: args.slice(1) };
};

const getParsed = function(firstArg, args) {
  if (firstArg.startsWith("-")) {
    return parseWithOption(firstArg, args);
  }
  return { option: "default", files: args };
};

const parser = function(args) {
  let firstArg = args[0];

  return getParsed(firstArg, args);
};

const getCombinations = function(firstCount, secondCount, fileName) {
  return TAB + firstCount + TAB + secondCount + " " + fileName;
};

const getIndividualOutputs = function(count, fileName) {
  return TAB + count + " " + fileName;
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

module.exports = {
  parser,
  getParsed,
  formatOutput,
  getIndividualOutputs,
  getCombinations,
  parseWithOption
};
