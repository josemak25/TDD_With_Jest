const addNumbers = require("./controllers/addNumbers");
const addIndefinite = require("./controllers/addIndefinite");
const divideNumber = require("./controllers/divideNumber");
const subtractNumber = require("./controllers/subtractNumber");
const multiplyIndefinite = require("./controllers/multiplyIndefinite");
const stringConcat = require("./controllers/stringConcat");
const gitHubApi = require("./controllers/gitHubApi");

module.exports = {
  addNumbers,
  addIndefinite,
  divideNumber,
  subtractNumber,
  multiplyIndefinite,
  stringConcat,
  gitHubApi
};
