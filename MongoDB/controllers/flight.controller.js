const Flight = require('../models/Flight.model');

const createFlight = async ({flightNumber, departureNumber, arrivalDate, departureTime, arrivalTime, departureAirport, arrivalAirport, passengerCount, passengerLimit}) => {
    try {
        const flight = new Flight({
            flightNumber, 
            departureNumber, 
            arrivalDate, 
            departureTime, 
            arrivalTime, 
            departureAirport, 
            arrivalAirport, 
            passengerCount, 
            passengerLimit
        });
        await flight.save();
        return flight._id;
    } catch(err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const findFlightById = async id => {
    try {
        const flight = await Flight.findById(id);
        if(flight == null)
            throw `No flight with the id of ${id} was found.`
        return flight;
    } catch(err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const findAllFlights = async () => {
    const flights = await Flight.find();
    return flights;
}

const updateFlight = async () => {

}

const deleteFlight = async () => {
    
}

module.exports = { createFlight, findFlightById, findAllFlights, updateFlight, deleteFlight };