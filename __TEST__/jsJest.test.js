const operations = require("../jsJest");

//Checking for add function

test("adds the sum of two integer numbers.", () => {
  expect(operations.add(5, 5)).toBe(10);
  expect(operations.add(10, 5)).toBe(15);
  expect(operations.add(100, 5)).toBe(105);
});
test("if add params is empty or not a number.", () => {
  const throwError = () => {
    operations.add("#", 12);
    operations.add(null, "");
    operations.add(undefined, 120);
  };
  expect(throwError).toThrowError(Error);
});

//Checking for addInfinte function

test("it should return the sum of all infinite numbers", () => {
  expect(operations.addInfinite(1, 2, 3, 5)).toBe(11);
  expect(operations.addInfinite(100, 2, 3, 5)).toBe(110);
  expect(operations.addInfinite(1, 12, 13, 50)).toBe(76);
});

test("if infinite sum params is not a number. ", () => {
  const throwError = () => {
    operations.addInfinite(1, 2, 3, undefined);
    operations.addInfinite("#", 12, 32, 43);
    operations.addInfinite(null, "", 32, 54, 5);
  };
  expect(throwError).toThrowError(Error);
});

//Checking for subtraction function
test("subtraction and return the difference of two integer numbers.", () => {
  expect(operations.subtraction(10, 5)).toBe(5);
  expect(operations.subtraction(10, 10)).toBe(0);
  expect(operations.subtraction(5, 10)).toBe(-5);
});
