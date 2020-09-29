const jokes = require('../model/jokes');

const listJokers = async (_request, response) => {
  const { joke } = await jokes.getJokes();

  response.render('jokeView', { joke });
};

module.exports = {
  listJokers,
}