const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        required: true,
        type: String
    }, 
    departureDate: [{
        day: String,
        month: String,
        year: String 
    }],
    arrivalDate: [{
        day: String,
        month: String,
        year: String 
    }],
    departureTime: [{
        hour: String,
        minute: String,
        isBeforeMidday: Boolean
    }],
    arrivalTime: [{
        hour: String,
        minute: String,
        isBeforeMidday: Boolean
    }], 
    departureAirport: [{
        airportName: String,
        airportTag: String
    }],
    arrivalAirport: [{
        airportName: String,
        airportTag: String
    }],
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