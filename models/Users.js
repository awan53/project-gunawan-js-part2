const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
    required: true
    }, 
    email:{
        type: String,
        require: true,
        unique: true
    }, 
    password: {
        type: String,
        require: true
    },
    avatar:{
        type: String
    },
    date: {
        type: date,
        default: date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);