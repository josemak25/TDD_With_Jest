const {
  addNumbers,
  addIndefinite,
  divideNumber,
  subtractNumber,
  multiplyIndefinite,
  stringConcat,
  gitHubApi
} = require("../index");

//Testing for add function
describe("add", () => {
  test("adds the sum of two integer numbers.", () => {
    expect(addNumbers(5, 5)).toBe(10);
  });

  test("if add params is a string or special character.", () => {
    expect(addNumbers("#", 5)).toBe("Please input a number to add");
  });

  test("if any or both params is empty.", () => {
    expect(addNumbers(1)).toBe("All field are required");
  });

  test("if any or both params is empty.", () => {
    expect(addNumbers()).toBe("All field are required");
  });
});

//Testing for addInfinte function
describe("addIndefinte", () => {
  test("it should return the sum of all indefinite numbers.", () => {
    expect(addIndefinite(1, 2, 3, 5)).toBe(11);
    expect(addIndefinite(-1, 2, 3, 5, 3 / 4, -1.43)).toBe(8.32);
  });

  test("if indefinite sum params is not a number or special character.", () => {
    expect(addIndefinite(1, 2, 3, undefined)).toBe(
      "Please input only valid integer numbers"
    );
    expect(addIndefinite("#", 12, 32, 43)).toBe(
      "Please input only valid integer numbers"
    );
  });

  test("if indefinite sum params is less than 2", () => {
    expect(addIndefinite(1)).toBe("Please input a range of numbers");
  });

  test("if indefinite sum params is empty.", () => {
    expect(addIndefinite()).toBe("All field are required");
  });
});

//Testing for multiInfinite function
describe("multiply", () => {
  test("multiply and return the difference of indefinite integer numbers.", () => {
    expect(multiplyIndefinite(10, 5)).toBe(50);
    expect(multiplyIndefinite(10, 10)).toBe(100);
    expect(multiplyIndefinite(-1, 2, 3, 5, 3 / 4, -1.43)).toBe(32.175);
  });

  test("if multiInfinite params is not a number. ", () => {
    expect(multiplyIndefinite("", undefined, 23, 3, 53)).toBe(
      "Please input only valid integer numbers"
    );
    expect(multiplyIndefinite("#", 12, "@", 35)).toBe(
      "Please input only valid integer numbers"
    );
  });

  test("if indefinite multipilication params is less than 2", () => {
    expect(multiplyIndefinite(1)).toBe("Please input a range of numbers");
  });

  test("if indefinite multipilication params is empty.", () => {
    expect(multiplyIndefinite()).toBe("All field are required");
  });
});

//Testing for division function
describe("division", () => {
  test("division and return result of two integer numbers.", () => {
    expect(divideNumber(10, 5)).toBe(2);
    expect(divideNumber(5, 10)).toBe(0.5);
  });

  test("if division params is not a number. ", () => {
    expect(divideNumber("", undefined)).toBe("Please input a number to divide");
    expect(divideNumber("#", 12)).toBe("Please input a number to divide");
  });

  test("if any or both division params is empty.", () => {
    expect(divideNumber(1)).toBe("All field are required");
  });
  test("if any or both division params is empty.", () => {
    expect(divideNumber()).toBe("All field are required");
  });
});

//Testing for string concatenate function
describe("string concat", () => {
  test("concatenate and return result of two string.", () => {
    expect(stringConcat("10", "5")).toBe("105");
    expect(stringConcat("John", "Doe")).toBe("JohnDoe");
    expect(stringConcat("-5", "10")).toBe("-510");
  });

  test("if concatenate params is not a number. ", () => {
    expect(stringConcat(undefined, "")).toBe(
      "Please input a string to concate"
    );
    expect(stringConcat("#", 120)).toBe("Please input a string to concate");
    expect(stringConcat(23, null)).toBe("Please input a string to concate");
  });
});

//Testing for subtract function
describe("subtract", () => {
  test("adds the sum of two integer numbers.", () => {
    expect(subtractNumber(10, 5)).toBe(5);
    expect(subtractNumber(-100, -5)).toBe(-95);
  });
  test("if add params is empty or not a number.", () => {
    expect(subtractNumber("#", 12)).toBe("Please input a number to subtract");
    expect(subtractNumber(null, "")).toBe("Please input a number to subtract");
  });
});

// GitHub user api function

// describe("searching github api to return all user repos", () => {
//   test("if a searched user exits return all user repos on his repository", async done => {
//     gitHubApi("BigShark").then(repo => {
//       expect(repo).toEqual(["JavaEE"]);
//       done();
//     });
//   });
//   test("if a searched user dosent exits", async done => {
//     gitHubApi("BigShark120").then(repo => {
//       expect(repo).toBe("User Not Found");
//       done();
//     });
//   });
//   test("if a searched user exits but dosent have any repo", async done => {
//     gitHubApi("josemak").then(repo => {
//       expect(repo).toBe("User Has No Repositories");
//       done();
//     });
//   });
// });
