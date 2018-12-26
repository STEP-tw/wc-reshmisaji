const fs = require("fs");
const { wc } = require("./src/wcLibrary.js");

const main = function(filePath) {
  let result = wc(filePath, fs);
  console.log(result);
};

main(process.argv[2]);
