const operations = {
  add: (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Please input a number to add");
    } else {
      return num1 + num2;
    }
  }
};
module.exports = operations;
