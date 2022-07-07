const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        required: true,
        unique: true ['This is a unique flight identifier.'],
        type: String
    }, 
    departureDate: String,
    arrivalDate: String,
    departureTime: String,
    arrivalTime: String, 
    departureAirport: {
        required: true ['There needs to be an departure airport for the flight to exist.'],
        type: String
    },
    arrivalAirport: {
        required: true ['There needs to be an arrival airport for the flight to exist.'],
        type: String
    },
    passengerCount: {
        required: true,
        type: String
    }, 
    passengerLimit: {
        required: true,
        type: String
    },
})

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;