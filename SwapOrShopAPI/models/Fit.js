const mongoose = require('mongoose');

const fitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    blogPost: {
        type: String,
        required: true,
        trim: true,
    },
    nowPlaying: {
        type: String,
        trim: true,
    },
    weather: {
        type: String,
        trim: true,
    },
    vibe: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const Fit = mongoose.model('Fit', fitSchema);
module.exports = Fit;