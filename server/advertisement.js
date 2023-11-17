const mongoose = require("mongoose");

//define an ad schema for the database
const AdSchema = new mongoose.Schema({
  creator_name: String,
  content: String,
});

// compile model from schema
module.exports = mongoose.model("ads", AdSchema);
