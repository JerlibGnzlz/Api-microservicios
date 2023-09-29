const films = require("../data/films.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    let films = await axios("http://database:8004/Films");
    return films.data;
  }


};