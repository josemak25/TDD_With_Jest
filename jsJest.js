const fetch = require("node-fetch");

const operations = {
  //Addition Method
  add: (num1, num2) => {
    if (Number(num1) || Number(num2)) {
      return num1 + num2;
    } else {
      throw new Error("Please input a number to add");
    }
  },

  //Addition of Indefinite Method
  addInfinite: (...params) => {
    const result = params.reduce((curNum, nextNum) => {
      if (Number(nextNum)) {
        return curNum + nextNum;
      } else {
        throw new Error("Please input only valid integer numbers");
      }
    });
    return result;
  },

  //Subtraction Method
  subtraction: (paramOne, paramTwo) => {
    if (Number(paramOne) || Number(paramTwo)) {
      return paramOne - paramTwo;
    } else {
      throw new Error("Please input a number to subtract");
    }
  },

  //Multiplaction of Infinite Method
  multiInfinite: (...params) => {
    const result = params.reduce((curNum, nextNum) => {
      if (Number(nextNum)) {
        return curNum * nextNum;
      } else {
        throw new Error("Please input only valid integer numbers");
      }
    });
    return result;
  },

  //Division Method
  divide: (paramOne, paramTwo) => {
    if (Number(paramOne) || Number(paramTwo)) {
      return paramOne / paramTwo;
    } else {
      throw new Error("Please input a number to divide");
    }
  },

  //Concate Method
  strConcat: (paramOne, paramTwo) => {
    if (Number.isInteger(paramOne) || Number.isInteger(paramTwo)) {
      throw new Error("Please input a string to concate");
    } else {
      return paramOne + paramTwo;
    }
  },

  gitHubApi: async userName => {
    const githubRes = await fetch(
      `https://api.github.com/users/${userName}/repos`
    );
    const githubUser = await githubRes.json();
    if (githubUser.hasOwnProperty("message")) {
      throw new Error("User Not Found");
    } else if (githubUser.length < 1) {
      throw new Error("User Has No Repositories");
    } else {
      return githubUser.map(res => res.name);
    }
  }
};
module.exports = operations;
