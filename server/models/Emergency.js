const { Schema, model } = require('mongoose');

const emergencySchema = new Schema({
    severity: {
        type: Number,
    },
    date: {
        type: Date,
    },
    zipcode: {
        type: Number,
    },
    description: {
        type: String,
    },
});


const Emergency = model('Emergency', emergencySchema);
console.log(Emergency);

module.exports = Emergency;