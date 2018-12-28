const TAB = "\t";
const SPACE = " ";
const validOptions = ["l", "w", "c"];

const getOptionsParsed = function(optionArgs) {
  let options = optionArgs.map(getOptions);

  return options;
};

const isValidOption = function(option) {
  return validOptions.includes(option);
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
  let validOptions = ["l", "w", "c"];
  let errorStatus = false;

  if (optionArgs.length > 0) {
    let options = getOptionsParsed(optionArgs);
    validOptions = options.filter(isValidOption);
    errorStatus = validOptions.length != options.length;
  }
  let option = validOptions.join("");
  return { option, files, errorStatus };
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
