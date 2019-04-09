//Concate Method
const strConcat = (paramOne, paramTwo) => {
  if (typeof paramOne === "string" && typeof paramTwo === "string") {
    return paramOne + paramTwo;
  } else {
    return "Please input a string to concate";
  }
};

module.exports = strConcat;
