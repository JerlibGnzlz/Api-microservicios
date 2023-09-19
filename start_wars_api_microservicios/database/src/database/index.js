const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/envs");

const connect = mongoose.createConnection(MONGO_URI);

const Character = connect.model("characters", require("./models/CharacterModels"));

Character.find()
  .then((res) => console.log(res));