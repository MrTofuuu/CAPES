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
  },
  featured:{
    type:Boolean
  }
  
});

const Hero = model('Hero', heroSchema);

module.exports = Hero;
