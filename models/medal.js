const mongoose = require('mongoose');

const medalSchema = new mongoose.Schema({
    countryName : {
        type: String,
        required: true,
    },
    goldCount : {
        type: Number,
        required: true,
    },
    silverCount : {
        type: Number,
        required: true,
    },
    bronzeCount : {
        type: Number,
        required: true,
    },
});

const Medal = mongoose.model('Medal', medalSchema);
module.exports = Medal;