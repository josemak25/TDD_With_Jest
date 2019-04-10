const operations = {
  //Addition Method
  add: (num1, num2) => {
    if (Number(num1) || Number(num2)) {
      return num1 + num2;
    } else {
      throw new Error("Please input a number to add");
    }
  },

  //Addition of Infinite Method
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
  }
};
module.exports = operations;
