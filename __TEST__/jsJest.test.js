const operations = require("../jsJest");

//Checking for add function

test("adds the sum of two integer numbers.", () => {
  expect(operations.add(5, 5)).toBe(10);
});
test("if add params is empty or not a number.", () => {
  const throwError = () => operations.add("#", 12);
  expect(throwError).toThrowError(Error);
});

//Checking for add function

test("it should return the sum of all infinite numbers", () => {
  expect(operations.addInfinite(1, 2, 3, 5)).toBe(11);
});

test("if infinite sum params is not a number. ", () => {
  const throwError = () => operations.addInfinite(1, 2, 3, undefined);
  expect(throwError).toThrowError(Error);
});
