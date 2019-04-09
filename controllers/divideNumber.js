//Division Method
const divide = (paramOne, paramTwo) => {
  if (typeof paramOne === "number" && typeof paramTwo === "number") {
    return paramOne / paramTwo;
  } else {
    return "Please input a number to divide";
  }
};

module.exports = divide;
