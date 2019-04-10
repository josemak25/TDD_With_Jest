//Division Method
const divide = (paramOne, paramTwo) => {
  if (paramOne >= 1 && paramTwo === 0) {
    return `${Infinity} can't divide by ${paramTwo}, Please divide by a number greater than ${paramTwo}`;
  }
  if (typeof paramOne === "number" && typeof paramTwo === "number") {
    return paramOne / paramTwo;
  } else if (paramOne == null || paramTwo == null) {
    return "All field are required";
  } else {
    return "Please input a number to divide";
  }
};

module.exports = divide;
