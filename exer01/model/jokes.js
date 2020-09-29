const axios = require('axios');

const URL = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

const getJokes = async () => {
  return (await axios(URL)).data;
};

module.exports = { getJokes };
