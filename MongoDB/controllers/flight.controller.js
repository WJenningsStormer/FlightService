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

const addAirportToFlightDeparture = async (_id, { airportName, airportTag, _id: airportId }) => {
    try {
        // Pushes onto the array for the field 'airport', a new object containing airport name, airport shorthand tag, and airportId
        await Flight.findByIdAndUpdate(_id, { $push: { departureAirport: { airportName, airportTag, _id: airportId } } });
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const addAirportToFlightArrival = async (_id, { airportName, airportTag, _id: airportId }) => {
    try {
        // Pushes onto the array for the field 'airport', a new object containing airport name, airport shorthand tag, and airportId
        await Flight.findByIdAndUpdate(_id, { $push: { arrivalAirport: { airportName, airportTag, _id: airportId } } });
    } catch (err) {
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

module.exports = { createFlight, findFlightById, addAirportToFlightDeparture, addAirportToFlightArrival, findAllFlights };