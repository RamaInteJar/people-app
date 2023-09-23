const mongoose = require("../db/connection");

const peopleSchema = mongoose.Schema({
  name: String,
  image: String,
  title: String,
});

const People = mongoose.model("People", peopleSchema)

module.exports = People