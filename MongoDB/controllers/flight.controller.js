const Flight = require('../models/Flight.model');

const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, arrivalTime, departureAirport, arrivalAirport, passengerCount, passengerLimit}) => {
    try {
        const flight = new Flight({
            flightNumber, 
            departureDate,
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

const findFlightByNumber = async number => {
    try {
        const flight = await Flight.findOne({flightNumber: number});
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

const updateFlight = async (updatedFlightNumber, updatedFlight) => {
    try{
        const flight = await Flight.findOneAndUpdate({flightNumber: updatedFlightNumber}, updatedFlight, {
            new: true
        });
        if(flight.flightNumber == null) { //if no flight was found
            throw `The flight with the flight number ${updatedFlightNumber} does not exist.`
        }
        return flight;
    } catch (err) {
        console.log(err);
        throw {status: 404, message: err };
    }
}

const deleteFlight = async deletedFlightNum => {
    try{
        console.log(deletedFlightNum);
        await Flight.findOneAndDelete({flightNumber: deletedFlightNum});
    } catch (err) {
        console.log(err);
        throw {status: 404, message: err };
    }
}

module.exports = { createFlight, findFlightByNumber, findAllFlights, updateFlight, deleteFlight };