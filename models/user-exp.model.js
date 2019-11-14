var mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
let Double = mongoose.Schema.Types.Decimal128;

let userExpSchema = mongoose.Schema({
    user_id: {
        type: ObjectId,
        required: true
    },
    company: {
        type: String,
        default: ''
    },
    year_of_experience: {
        type: Double,
        default: 0
    },
    designation: {
        type: String,
        default: ''
    }
}, {
    collections: 'user-experience',
    timeStamp: true
});

let userExpModel = mongoose.model('user-experience', userExpSchema);


module.exports = userExpModel;