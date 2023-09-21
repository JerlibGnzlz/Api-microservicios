const { Schema } = require("mongoose");

const planetSchema = new Schema(
  {
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{
      type: String,
      ref: "character"
    }],
    films: [{
      type: String,
      ref: "Films"
    }]
    //   ,
    //   {
    //   versionKey: false,
    //   timestamps: false
    // });
  });


module.exports = planetSchema;