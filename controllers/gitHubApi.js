const axios = require("axios");
const gitHubApi = async userName => {
  const githubRes = await axios(
    `https://api.github.com/users/${userName}/repos`
  );
  const githubUser = await githubRes;
  if (githubUser.hasOwnProperty("message")) {
    return "User Not Found";
  } else if (githubUser.length < 1) {
    return "User Has No Repositories";
  } else {
    return githubUser.map(res => res.name);
  }
};
module.exports = gitHubApi;
