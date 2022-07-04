import { useEffect, useState } from 'react';
import './FlightList.css';
import axios from 'axios';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <div>
            {flights.map((flight, index) => {
                return (
                    <div key={flight._id} >
                        <div><strong>Flight Number: </strong>{flight.flightNumber}</div>
                        <div><strong>Departure Date: </strong>{flight.departureDate.day}/{flight.departureDate.month}/{flight.departureDate.year}</div>
                        <div><strong>Arrival Date: </strong>{flight.arrivalDate.day}/{flight.arrivalDate.month}/{flight.arrivalDate.year}</div>
                        <div><strong>Departure Time: </strong>{flight.departureTime.hour}:{flight.departureTime.minute} {(flight.departureTime.isBeforeMidday) ? 'A.M.' : 'P.M.'}</div>
                        <div><strong>Arrival Time: </strong>{flight.arrivalTime.hour}:{flight.arrivalTime.minute} {(flight.arrivalTime.isBeforeMidday) ? 'A.M.' : 'P.M.'}</div>
                        <div><strong>Departure Airport: </strong>{flight.departureAirport.airportName} ({flight.departureAirport.airportTag})</div>
                        <div><strong>Arrival Airport: </strong>{flight.arrivalAirport.airportName} ({flight.arrivalAirport.airportTag})</div>
                        <div><strong>Number of Passengers: </strong>{flight.passengerCount}</div>
                        <div></div>
                    </div>
                );
            })}
        </div>
    )
}