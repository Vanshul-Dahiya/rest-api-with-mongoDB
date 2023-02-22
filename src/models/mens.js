
const mongoose = require("mongoose");

// define document structure i.e schema
// what each player will have as its attribute/properties
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

// now create a new collection
const MensRanking = new mongoose.model("MenRanking", menSchema);

// now create documents using postman
module.exports = MensRanking;
