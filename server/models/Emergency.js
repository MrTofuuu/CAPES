const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const emergencySchema = new Schema({
    severity: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    zipcode: {
        type: Number,
    },
    description: {
        type: String,
    },
    reporter: {
        type: String,
        required: true,
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