const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        required: true,
        type: String
    }, 
    departureDate: {
        day: {
            required: true,
            type: String
        },
        month: {
            required: true,
            type: String
        },
        year: {
            required: true,
            type: String
        }
    },
    arrivalDate: {
        day: {
            required: true,
            type: String
        },
        month: {
            required: true,
            type: String
        },
        year: {
            required: true,
            type: String
        }
    },
    departureTime: {
        hour: {
            required: true,
            type: String
        },
        minute: {
            required: true,
            type: String
        },
        isBeforeMidday: {
            required: true,
            type: Boolean
        }
    },
    arrivalTime: {
        hour: {
            required: true,
            type: String
        },
        minute: {
            required: true,
            type: String
        },
        isBeforeMidday: {
            required: true,
            type: Boolean
        }
    }, 
    departureAirport: {
        airportName: {
            required: true,
            type: String
        },
        airportTag: {
            required: true,
            type: String
        }
    },
    arrivalAirport: {
        airportName: {
            required: true,
            type: String
        },
        airportTag: {
            required: true,
            type: String
        }
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