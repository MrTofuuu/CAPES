const { Schema, model } = require('mongoose');

const emergencySchema = new Schema({
    severity: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    zipcode: {
        type: Number,
    },
    description: {
        type: String,
    },
    heroes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Hero'
        }
      ]
});


const Emergency = model('Emergency', emergencySchema);
console.log(Emergency);

module.exports = Emergency;