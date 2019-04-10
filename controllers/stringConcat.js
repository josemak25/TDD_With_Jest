//Concate Method
const strConcat = (paramOne, paramTwo) => {
  if (typeof paramOne === "string" && typeof paramTwo === "string") {
    return paramOne + paramTwo;
  } else if (paramOne == null || paramTwo == null) {
    return "All field are required";
  } else {
    return "Please input a string to concate";
  }
};

module.exports = strConcat;
