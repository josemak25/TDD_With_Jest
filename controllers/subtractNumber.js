//Subtraction Method
const subtraction = (paramOne, paramTwo) => {
  if (typeof paramOne === "number" && typeof paramTwo === "number") {
    return paramOne - paramTwo;
  } else if (paramOne == null || paramTwo == null) {
    return "All field are required";
  } else {
    return "Please input a number to subtract";
  }
};

module.exports = subtraction;
