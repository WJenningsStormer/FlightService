import { useEffect, useState } from 'react';
import { FlightCard } from '../FlightCard';
import axios from 'axios';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data));
    }, []);

    return (
        <div>
            <div>this is displayed, right?</div>
            {flights.map((currFlight, index) => {
                return (
                    <div> <div>this is displayed</div>
                        <FlightCard flight = {currFlight}/>
                    </div>
                );
            })}
        </div>
    )
}