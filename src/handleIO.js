const TAB = "\t";
const SPACE = " ";

const getParsed = function(firstArg, args) {
  if (firstArg.startsWith("-")) {
    return { option: firstArg.slice(1), files: args.slice(1) };
  }
  return { option: "default", files: args };
};

const parser = function(args) {
  let firstArg = args[0];

  return getParsed(firstArg, args);
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

module.exports = { parser, getParsed, formatOutput };
