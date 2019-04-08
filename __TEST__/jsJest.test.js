const operations = require("../jsJest");

it("adds the sum of two integer numbers.", () => {
  expect(operations.add(5, 5)).toBe(10);
});
