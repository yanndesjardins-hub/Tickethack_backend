const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: {
        type: Date,
        min: '2026-03-01',
        max: '2026-06-30'
    },
    price: Number,
});


const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;