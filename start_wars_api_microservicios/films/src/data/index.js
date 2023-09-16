const films = require("../data/films.json");

module.exports = {
  list: async () => {
    return films;
  }


};