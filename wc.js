const fs = require("fs");
const { wc } = require("./src/wcLibrary.js");

const main = function(userArgs) {
  let contentDetails = wc(userArgs, fs);

  console.log(contentDetails);
};

main(process.argv.slice(2));
