const operations = require("../jsJest");

//Testing for add function

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

//Testing for addInfinte function

test("it should return the sum of all infinite numbers.", () => {
  expect(operations.addInfinite(1, 2, 3, 5)).toBe(11);
  expect(operations.addInfinite(100, 2, 3, 5)).toBe(110);
  expect(operations.addInfinite(-1, 2, 3, 5, 3 / 4, -1.43)).toBe(8.32);
});

test("if indefinite sum params is not a number.", () => {
  const throwError = () => {
    operations.addInfinite(1, 2, 3, undefined);
    operations.addInfinite("#", 12, 32, 43);
    operations.addInfinite(null, "", 32, 54, 5);
  };
  expect(throwError).toThrowError(Error);
});

//Testing for subtraction function
test("subtraction and return the difference of two integer numbers.", () => {
  expect(operations.subtraction(10, 5)).toBe(5);
  expect(operations.subtraction(10, 10)).toBe(0);
  expect(operations.subtraction(5, 10)).toBe(-5);
});

test("if subtraction params is not a number. ", () => {
  const throwError = () => {
    operations.addInfinite("", undefined);
    operations.addInfinite("#", 12);
    operations.addInfinite(null, 32);
  };
  expect(throwError).toThrowError(Error);
});

//Testing for multiInfinite function
test("multiply and return the difference of indefinite integer numbers.", () => {
  expect(operations.multiInfinite(10, 5)).toBe(50);
  expect(operations.multiInfinite(10, 10)).toBe(100);
  expect(operations.multiInfinite(-1, 2, 3, 5, 3 / 4, -1.43)).toBe(32.175);
});

test("if multiInfinite params is not a number. ", () => {
  const throwError = () => {
    operations.multiInfinite("", undefined, 23, 3, 53);
    operations.multiInfinite("#", 12, "@", 35);
  };
  expect(throwError).toThrowError(Error);
});

//Testing for division function
test("division and return result of two integer numbers.", () => {
  expect(operations.divide(10, 5)).toBe(2);
  expect(operations.divide(10, 10)).toBe(1);
  expect(operations.divide(5, 10)).toBe(0.5);
});

test("if subtraction params is not a number. ", () => {
  const throwError = () => {
    operations.divide("", undefined);
    operations.divide("#", 12);
    operations.divide(23, null);
  };
  expect(throwError).toThrowError(Error);
});
