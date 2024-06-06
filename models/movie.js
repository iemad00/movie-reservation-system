const mongoose = require("mongoose");


const timeSlotsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    startTime: {
        type: Date,
        required: [true, 'Start Time is required']
    },
    endTime: {
        type: Date,
        required: [true, 'End Time is required']
    },
    capacity: {
        type: Number,
        required: [true, 'Capacity is required']
    },
    booked: {
        type: Number,
        default: 0,
    }
})

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie Title is required'],
        unique: [true, 'Movie Title is already exists']
    },
    timeSlots: [timeSlotsSchema],
})


module.exports = mongoose.model('Movie', movieSchema);