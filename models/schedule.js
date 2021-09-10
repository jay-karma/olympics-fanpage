const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    sportName: {
        type: String,
        required: true,
    },
    countryNames : [{
        type: String,
        required: true,
    }],
    startTime: {
        type: Number,
        required: true,
    },
    endTime: {
        type: Number,
        required: true,
    },
    day: {
        type: Number,
        required: true,
    }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;