const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Restaurant = new Schema 
({
    name:
    {
        type: String,
        required: true
    },

    lat: 
    {
        type: String,
        required: true
    },

    long: 
    {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = Contact = mongoose.model('Restaurants', Restaurant);