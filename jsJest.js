const operations = {
  //Addition Method
  add: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Please input a number to add");
    } else {
      return num1 + num2;
    }
  },

  //Addition of Infinite Method
  addInfinite: (...params) => {
    const result = params.reduce((curNum, nextNum) => {
      if (isNaN(nextNum)) {
        throw new Error("Please input only valid integer numbers");
      } else {
        return curNum + nextNum;
      }
    });
    return result;
  },

  //Subtraction Method
  subtraction: (paramOne, paramTwo) => {
    if (isNaN(paramOne) || isNaN(paramTwo)) {
      throw new Error("Please input a number to subtract");
    } else {
      return paramOne - paramTwo;
    }
  },

  //Multiplaction of Infinite Method
  multiInfinite: (...params) => {
    const result = params.reduce((curNum, nextNum) => {
      if (isNaN(nextNum)) {
        throw new Error("Please input only valid integer numbers");
      } else {
        return curNum * nextNum;
      }
    });
    return result;
  }
};
module.exports = operations;
