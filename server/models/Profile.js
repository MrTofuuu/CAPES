const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },

});

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
    console.log(typeof password);
    console.log('this is inside the iscorrectPW method')
    console.log(typeof this.password);
    console.log(password === this.password);
    return await bcrypt.compare(password, this.password);

    // if (password === this.password) {
    //     return true;
    // } else {
    //     return false;
    // }

};


const Profile = model('Profile', profileSchema);

module.exports = Profile;
