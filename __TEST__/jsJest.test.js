const operations = require("../jsJest");

//Checking for add function

test("adds the sum of two integer numbers.", () => {
  expect(operations.add(5, 5)).toBe(10);
});
test("if add params is empty or not a number.", () => {
  function throwError() {
    operations.add("#", 12);
  }
  expect(throwError).toThrowError(Error);
});
