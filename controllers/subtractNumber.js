//Subtraction Method
const subtraction = (paramOne, paramTwo) => {
  if (typeof paramOne === "number" && typeof paramTwo === "number") {
    return paramOne - paramTwo;
  } else {
    return "Please input a number to subtract";
  }
};

module.exports = subtraction;
