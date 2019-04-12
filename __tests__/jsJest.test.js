const mockAxios = require("../controllers/__mocks__/axios");

const {
  userRepoData,
  userExitNoRepo,
  userNotFound
} = require("../controllers/__mocks__/userRepoDB");

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
    expect(divideNumber(10, 0)).toBe(
      "Infinity can't divide by 0, Please divide by a number greater than 0"
    );
  });

  test("if division params is not a number. ", () => {
    expect(divideNumber(" ", NaN)).toBe("Please input a number to divide");
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
    expect(stringConcat("John", "Doe")).toBe("JohnDoe");
    expect(stringConcat("-5", "10")).toBe("-510");
  });

  test("if concatenate params is not a number. ", () => {
    expect(stringConcat(1, " ")).toBe("Please input a string to concate");
    expect(stringConcat("#", 120)).toBe("Please input a string to concate");
  });
  test("if any string concatenate params is empty.", () => {
    expect(stringConcat(1)).toBe("All field are required");
  });
  test("if both string concatenate params are empty.", () => {
    expect(stringConcat()).toBe("All field are required");
  });
});

//Testing for subtract function
describe("subtract", () => {
  test("subtract the value of two integer numbers.", () => {
    expect(subtractNumber(10, 5)).toBe(5);
    expect(subtractNumber(-100, -5)).toBe(-95);
  });
  test("if subtract params is not a number.", () => {
    expect(subtractNumber("#", 12)).toBe("Please input a number to subtract");
  });
  test("if any string concatenate params is empty.", () => {
    expect(subtractNumber(1)).toBe("All field are required");
  });
  test("if both string concatenate params are empty.", () => {
    expect(subtractNumber()).toBe("All field are required");
  });
});

// GitHub user api function

describe("gitHub Api mock test", () => {
  test("check if axios made a GET method using the correct username inputed in gitHubApi function", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userRepoData));
    const userRepos = await gitHubApi("Josemak25");
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/Josemak25/repos"
    );
  });

  test("check if user repositories from response are all objects", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userRepoData));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(typeof userRepos.map(elem => elem)).toEqual("object");
  });

  test("check for response from githubDB to be an object", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userRepoData));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(typeof userRepos).toEqual("object");
  });

  test("check for names of repo from response", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userRepoData));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(userRepos.map(elem => elem.name)).toContain(
      "EventManager",
      "BootstrapGameTheme",
      "BookBlogPost"
    );
  });

  test("if a searched user exists but has no repo in his repository", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userExitNoRepo));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(userRepos).toBe("User Has No Repositories");
  });

  test("if a searched user dosent exits", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userNotFound));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(userRepos).toBe("User Not Found");
  });

  test("check if axios made a GET method call and its url path", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userRepoData));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/AbetangJoseph/repos"
    );
  });
  test("check for how many instances get method to was sent to our mock githubDB", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(userRepoData));
    const userRepos = await gitHubApi("AbetangJoseph");
    expect(mockAxios.get).toHaveBeenCalledTimes(8);
  });
});
