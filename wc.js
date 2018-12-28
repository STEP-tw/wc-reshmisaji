const fs = require("fs");
const { wc } = require("./src/wcLibrary.js");
const { parser } = require("./src/handleIO.js");

const main = function(userArgs) {
  let { option, files, errorStatus } = parser(userArgs);
  let contentDetails = wc({ option, files }, fs);

  console.log(contentDetails);
};

main(process.argv.slice(2));
