//Addition of Indefinite Method
const Indefinite = (...params) => {
  if (params.length === 1) {
    return "Please input a range of numbers";
  } else if (params.length === 0) {
    return "All field are required";
  }
  const result = params.reduce((curNum, nextNum) => {
    if (typeof curNum === "number" && typeof nextNum === "number") {
      return curNum + nextNum;
    } else {
      return "Please input only valid integer numbers";
    }
  });
  return result;
};

module.exports = Indefinite;
