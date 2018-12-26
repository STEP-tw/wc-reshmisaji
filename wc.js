const fs = require("fs");
const { wc } = require("./src/wcLibrary.js");

const main = function(filePath) {
  let result = wc(filePath[0], fs);

  console.log(result);
};

main(process.argv.slice(2));
