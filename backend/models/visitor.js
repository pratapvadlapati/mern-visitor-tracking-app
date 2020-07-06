const mongoose = require('mongoose');


const Visitor = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    tokenId: {
        type: Number
    },
    phone: {
        type: Number,
        required: true
    },
    loggedin: {
        type: Date
    },
    loggedout: {
        type: Date
    },
    loggedinStatus: {
        type: Boolean,
        default: false
    },
    history: [
        {
            arrived: Date,
            left: Date
        }
    ]
});






module.exports = mongoose.model('Visitor', Visitor);