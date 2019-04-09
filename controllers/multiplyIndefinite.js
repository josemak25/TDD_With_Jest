//Multiplaction of Infinite Method
const multiInfinite = (...params) => {
  const result = params.reduce((curNum, nextNum) => {
    if (typeof curNum === "number" && typeof nextNum === "number") {
      return curNum * nextNum;
    } else {
      return "Please input only valid integer numbers";
    }
  });
  return result;
};

module.exports = multiInfinite;
