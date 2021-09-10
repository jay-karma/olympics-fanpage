const mongoose = require('mongoose');

const fansSchema = new mongoose.Schema({
    countryName : {
        type: String,
        required: true,
    },
    cheers: {
        type: Number,
        required: true,
    }
});

const Fans = mongoose.model('Fans', fansSchema);
module.exports = Fans;