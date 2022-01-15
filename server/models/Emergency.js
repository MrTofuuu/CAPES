const { Schema, model } = require('mongoose');

const emergencySchema = new Schema({
  severity: {
    type: Number,
    required: true,
  }
});

const Emergency = model('Emergency', emergencySchema);

module.exports = Emergency