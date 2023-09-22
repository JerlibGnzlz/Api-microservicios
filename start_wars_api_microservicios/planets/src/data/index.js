const planets = require("../data/planets.json");

module.exports = {
  list: async () => {
    let planets = await axios("http://database:8004/Planets");
    return planets.data;

  }


};