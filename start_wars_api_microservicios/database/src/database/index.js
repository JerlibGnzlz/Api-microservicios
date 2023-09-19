const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/envs");

const connect = mongoose.createConnection(MONGO_URI);

// const Character = connect.model("characters", require("./models/CharacterModels"));
// const films = connect.model("films", require("./models/filmsModels"));
// const planet = connect.model("planets", require("./models/planetsModels"));

// Character.find()
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res[0]));



module.exports = {
  Character: connect.model("characters", require("./models/CharacterModels")),
  films: connect.model("films", require("./models/filmsModels")),
  planet: connect.model("planets", require("./models/planetsModels"))
};