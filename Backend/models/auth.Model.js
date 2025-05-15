const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    //Required Feilds
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['administrator', 'admin', 'user'],
        default: 'user'
    }
}, { timestamps: true });

const authModel = mongoose.model('users', authSchema);

module.exports = authModel;