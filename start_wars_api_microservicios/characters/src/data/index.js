const characters = require("../data/characters.json");
const axios = require("axios");


module.exports = {
  list: async () => {
    // return characters;
    let characters = await axios("http://database:8004/Character");
    return characters.data;
  },
  create: async () => {
    throw Error("No se puede crear un personaje");
  }
};