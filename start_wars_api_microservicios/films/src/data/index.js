const films = require("../data/films.json");

module.exports = {
  list: async () => {
    let films = await axios("http://database:8004/Character");
    return films.data;
  }


};