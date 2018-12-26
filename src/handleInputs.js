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

module.exports = { parser, getParsed };
