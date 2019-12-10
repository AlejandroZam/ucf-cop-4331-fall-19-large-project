const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Menu = new Schema 
({
    id:
    {
        type: String,
        required: true
    },
    
    name:
    {
        type: String,
        required: true
    },

    price: 
    {
        type: String,
        required: true
    },

    description: 
    {
        type: String,
        required: true
    },

    isCombo: 
    {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = Contact = mongoose.model('Menu', Menu);