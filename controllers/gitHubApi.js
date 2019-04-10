const fetch = require("node-fetch");
const gitHubApi = async userName => {
  console.log("geting to the api");
  const githubRes = await fetch(
    `https://api.github.com/users/${userName}/repos`
  );
  const githubUser = await githubRes.json();
  if (githubUser.hasOwnProperty("message")) {
    return "User Not Found";
  } else if (githubUser.length < 1) {
    return "User Has No Repositories";
  } else {
    return githubUser.map(res => res.name);
  }
};
module.exports = gitHubApi;
