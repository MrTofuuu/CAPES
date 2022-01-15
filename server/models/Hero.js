const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  severity: {
    type: Number,
    required: true,
  }
});

const Hero = model('Hero', heroSchema);

module.exports = Hero;
