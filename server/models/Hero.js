const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  severity: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  },
  image: {
    type: String,
    required: true
  }
  // TODO: Need to add a featured flag or something similar 
});

const Hero = model('Hero', heroSchema);

module.exports = Hero;
