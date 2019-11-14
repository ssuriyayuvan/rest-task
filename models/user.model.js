var mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    username: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'users',
    timeStamp: true
});

let userModel = mongoose.model('users', userSchema)

module.exports = userModel;