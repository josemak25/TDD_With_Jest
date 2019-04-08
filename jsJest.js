const operations = {
  add: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Please input a number to add");
    } else {
      return num1 + num2;
    }
  },
  addInfinite: (...params) => {
    const result = params.reduce((curNum, nextNum) => {
      if (isNaN(nextNum)) {
        throw new Error("Please input only valid integer numbers");
      } else {
        return curNum + nextNum;
      }
    });
    return result;
  }
};
module.exports = operations;
