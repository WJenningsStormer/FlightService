import { useRef, useEffect, useState } from 'react';
import { AddFlight } from "../AddFlight";
import styles from './FlightSearchResult.css';
import axios from 'axios';

export const FlightSearchResult = () => {
    //this.onSearch.bind(this);
    //this.displayFlight.bind(this);

    const FlightNumberRef = useRef("BA5680");
    console.log(FlightNumberRef.value);
    const [flight, setFlight] = useState();

    const searchForFlight = () => {
        console.log(FlightNumberRef.current.value);
        axios.get(`http://localhost:8085/flights/${FlightNumberRef.current.value}`)
        .then(res => setFlight(res.data));
    }

    const onSearch = e => {
        e.preventDefault();
        searchForFlight();
        displayFlight();
    }
    
    const displayFlight = () => {
        searchForFlight();
        return (
            <divcard>
                <div><strong>Flight Number: </strong>{flight.flightNumber}</div>
                <div><strong>Departure Date: </strong>{flight.departureDate.day}/{flight.departureDate.month}/{flight.departureDate.year}</div>
                <div><strong>Arrival Date: </strong>{flight.arrivalDate.day}/{flight.arrivalDate.month}/{flight.arrivalDate.year}</div>
                <div><strong>Departure Time: </strong>{flight.departureTime.hour}:{flight.departureTime.minute} {(flight.departureTime.isBeforeMidday) ? 'A.M.' : 'P.M.'}</div>
                <div><strong>Arrival Time: </strong>{flight.arrivalTime.hour}:{flight.arrivalTime.minute} {(flight.arrivalTime.isBeforeMidday) ? 'A.M.' : 'P.M.'}</div>
                <div><strong>Departure Airport: </strong>{flight.departureAirport.airportName} {flight.departureAirport.airportTag}</div>
                <div><strong>Arrival Airport: </strong>{flight.arrivalAirport.airportName} {flight.arrivalAirport.airportTag}</div>
                <div><strong>Number of Passengers: </strong>{flight.passengerCount}</div>
            </divcard>
        )
    }

    const editFlight = () => {
        return(
            <div>
                <AddFlight />
            </div>
        )
    }

    const deleteFlight = () => {
        //axios.get(`http://localhost:8085/flights/${flightNumber}`)
        //.then(res => setFlight(res.data));
    }

    return(
        <div>
            <label1>Flight Number</label1>
            <div><input type="text" ref={FlightNumberRef}/></div>
            <button onClick={displayFlight}>Search</button>
            <div>Flight: </div>
            <button onClick={editFlight}>Edit Flight</button>
            <button onClick={deleteFlight}>Delete Flight</button>
        </div>
    )
}