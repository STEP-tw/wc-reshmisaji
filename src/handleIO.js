const TAB = "\t";
const SPACE = " ";

const parseWithOption = function(firstArg, args) {
  return { option: firstArg.slice(1), files: args.slice(1) };
};

const getParsed = function(firstArg, args) {
  if (firstArg.startsWith("-")) {
    return parseWithOption(firstArg, args);
  }
  return { option: "lwc", files: args };
};

const parser = function(args) {
  let firstArg = args[0];

  return getParsed(firstArg, args);
};

const formatOutput = function(counts, filePath) {
  let formatedOutput = counts.map(x => TAB + x).join("");

  return formatedOutput + SPACE + filePath;
};

module.exports = {
  parser,
  getParsed,
  formatOutput,
  parseWithOption
};
