//Addition Method
const add = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return "Please input a number to add";
  }
};

module.exports = add;
