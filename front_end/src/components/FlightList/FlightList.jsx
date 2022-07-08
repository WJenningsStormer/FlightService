import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
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
                    <div key={flight._id}>
                        <Form>
                            <Form.Group float="left" className="mb-3" controlId="formFlightNumber">
                                <Form.Label>Flight Number: </Form.Label>
                                <text>{flight.flightNumber}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDepartureInfo">
                                <Form.Label>Departure Date & Time: </Form.Label>
                                <text><br></br>{flight.departureDate}  @  {flight.departureTime}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formArrivalInfo">
                                <Form.Label>Arrival Date & Time: </Form.Label>
                                <text><br></br>{flight.arrivalDate}  @  {flight.arrivalTime}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDepAirportInfo">
                                <Form.Label>Departure Airport: </Form.Label>
                                <text>{flight.departureAirport}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formArrAirportInfo">
                                <Form.Label> Arrival Airport: </Form.Label>
                                <text>{flight.arrivalAirport}</text>
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formPassengerLimit">
                                <Form.Label> Passenger Count: </Form.Label>
                                <text>{flight.passengerCount}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassengerLimit">
                                <Form.Label> Passenger Limit: </Form.Label>
                                <text>{flight.passengerLimit}</text>
                            </Form.Group>
                        </Form>
                    </div>
                );
            })}
        </div>
    )
}