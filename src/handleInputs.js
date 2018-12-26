const parse = function(args) {
  let option = "default";
  let files = args[0];
  if (args[0].startsWith("-")) {
    option = args[0];
    files = args.slice(1);
  }
  return { option: option, files: files };
};

module.exports = { parse };
