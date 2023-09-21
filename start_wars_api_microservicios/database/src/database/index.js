const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/envs");

const connect = mongoose.createConnection(MONGO_URI);


module.exports = {
  Character: connect.model("character", require("./models/CharacterModels")),
  Films: connect.model("films", require("./models/filmsModels")),
  Planet: connect.model("planet", require("./models/planetsModels"))
};