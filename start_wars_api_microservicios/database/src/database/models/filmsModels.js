const { Schema, Types } = require("mongoose");

const filmsSchema = new Schema(
  {
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{
      type: String,
      ref: "character"
    }],
    planets: [{
      type: String,
      ref: "planet",
    }]

    //   {
    //   versionKey: false,
    //   timestamps: false
    // });
  });


module.exports = filmsSchema;