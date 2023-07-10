const mongoose = require('mongoose');

const sosSchema = new mongoose.Schema({
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
    brand: {
        type: String,
        trim: true,
    },
    size: {
        type: String,
        required: true,
        trim: true,
    },
    condition: {
        type: String,
        trim: true,
    },
    price: {
        type: String,
        trim: true,
    },
    fileName: {
        type: String,
    }
}, { timestamps: true });

const SOS = mongoose.model('SOS', sosSchema);
module.exports = SOS;
