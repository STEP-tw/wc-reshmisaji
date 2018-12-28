const TAB = "\t";
const SPACE = " ";

const getOptionsParsed = function(optionArgs) {
  let option = optionArgs.map(getOptions).join("");

  return option;
};

const getOptionArg = function(arg) {
  return arg.startsWith("-");
};

const getOptions = function(optionArgs) {
  return optionArgs.slice(1);
};

const getFiles = function(arg) {
  return !getOptionArg(arg);
};

const parser = function(args) {
  let optionArgs = args.filter(getOptionArg);
  let files = args.filter(getFiles);
  let option = "lwc";

  if (optionArgs.length > 0) {
    option = getOptionsParsed(optionArgs);
  }

  return { option: option, files: files };
};

const formatOutput = function(counts, filePath) {
  let formatedOutput = counts.map(x => TAB + x).join("");

  return formatedOutput + SPACE + filePath;
};

module.exports = {
  parser,
  getOptionsParsed,
  formatOutput,
  getOptions
};
