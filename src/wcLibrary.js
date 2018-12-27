const {
  getLineCount,
  getCharacterCount,
  removeEmptyStrings
} = require("../src/util.js");
const { formatOutput, parser } = require("../src/handleIO.js");

const NEWLINE = "\n";
const SPACE = " ";

const getWords = function(contents) {
  let data = contents.split(NEWLINE);
  data = data.join(SPACE);
  let words = data.split(SPACE);
  return words;
};

const getWordCount = function(contents) {
  let words = getWords(contents);
  let wordsWithoutSpace = removeEmptyStrings(words);

  return wordsWithoutSpace.length;
};

const getContents = function(filePath, fs) {
  return fs.readFileSync(filePath, "utf8");
};

const getCounts = function(contents) {
  let numberOfLines = getLineCount(contents);
  let numberOfCharacters = getCharacterCount(contents);
  let numberOfWords = getWordCount(contents);
  return [numberOfLines, numberOfWords, numberOfCharacters];
};

const getRequired = function(allCounts, option) {
  let resultCount = [];
  if (option.includes("l")) {
    resultCount.push(allCounts[0]);
  }
  if (option.includes("w")) {
    resultCount.push(allCounts[1]);
  }
  if (option.includes("c")) {
    resultCount.push(allCounts[2]);
  }
  return resultCount;
};

const getContentDetails = function(option, fs, file) {
  let contents = getContents(file, fs);
  let allCounts = getCounts(contents);
  let counts = getRequired(allCounts, option);

  return [counts, file];
};

const addCounts = function(firstCounts, secondCounts) {
  let sumCounts = [];
  for (let index = 0; index < firstCounts.length; index++) {
    sumCounts.push(firstCounts[index] + secondCounts[index]);
  }
  return sumCounts;
};

const addDetails = function(contentDetails) {
  let counts = contentDetails[0];
  let fileName = contentDetails[1];

  return formatOutput(counts, fileName);
};

const getAllCounts = function(fileDetails) {
  return fileDetails[0];
};

const wc = function(filePath, fs) {
  let { option, files } = parser(filePath);
  let getFileDetails = getContentDetails.bind(null, option, fs);
  let fileDetails = files.map(getFileDetails);
  let allCounts = fileDetails.map(getAllCounts);
  let total = allCounts.reduce(addCounts);

  if (fileDetails.length > 1) {
    fileDetails.push([total, "total"]);
  }
  let finalResult = fileDetails.map(x => addDetails(x));

  return finalResult.join("\n");
};

module.exports = {
  getWords,
  getWordCount,
  getContents,
  getCounts,
  wc,
  getRequired,
  getContentDetails,
  addDetails,
  addCounts
};
