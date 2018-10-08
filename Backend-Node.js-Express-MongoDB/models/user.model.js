const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'client',
        required: true
    }
})


module.exports = mongoose.model('User', UsersSchema);