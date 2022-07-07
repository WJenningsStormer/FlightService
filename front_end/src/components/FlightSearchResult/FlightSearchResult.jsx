import { useRef, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Center } from "../StylePractice";
import { useNavigate } from 'react-router-dom';
import './FlightSearchResult.css';
import axios from 'axios';

export const FlightSearchResult = () => {
    //this.onSearch.bind(this);
    //this.displayFlight.bind(this);

    const FlightNumberRef = useRef();
    const [flight, setFlight] = useState();
    const navigate = useNavigate();

    const searchForFlight = async () => {
        let currFlightNumber = FlightNumberRef.current.value;

        try {
            if( currFlightNumber !== "") {
                axios.get(`http://localhost:8085/flights/${currFlightNumber}`)
                .then(res => setFlight(res.data));
            } else {
                setFlight();
                alert("Please enter a flight number to search!");
            }
        } catch (err) {
            setFlight();
            alert(err.response.data.message);
        } finally {
            FlightNumberRef.current.value = null;
        }
    }

    const onSearch = async e => {
        e.preventDefault();
        searchForFlight();
    }

    const deleteFlight = async () => {
        try {
            console.log(flight.flightNumber);
            await axios.delete(`http://localhost:8085/flights/${flight.flightNumber}`)
            .then(res => console.log(res.status));
            navigate('./', {replace: true});
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    return(
        <div>
            
            <header> 
                    <label>Flight Number</label>
                    <div><input type="text" ref={FlightNumberRef}/></div>
                    <button onClick={onSearch}>Search</button>
            </header>
            <Center>
                {flight && <Form>
                    <div key={flight._id}>
                        <Form.Group float="left" className="mb-3" controlId="formFlightNumber">
                            <Form.Label>Flight Number: </Form.Label>
                            <text>{flight.flightNumber}</text>
                        </Form.Group>

                        <div style={{float: "left", marginRight: '10px'}}>
                            <Form.Group className="mb-3" controlId="formDepartureInfo">
                                <Form.Label>Departure Date & Time: </Form.Label>
                                <text><br></br>{flight.departureDate}  @  {flight.departureTime}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formArrivalInfo">
                                <Form.Label>Arrival Date & Time: </Form.Label>
                                <text><br></br>{flight.arrivalDate}  @  {flight.arrivalTime}</text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassengerLimit">
                                <Form.Label> Passenger Count: </Form.Label>
                                <text>{flight.passengerCount}</text>
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formDepAirportInfo">
                            <Form.Label>Departure Airport: </Form.Label>
                            <text>{flight.departureAirport}</text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formArrAirportInfo">
                            <Form.Label><br></br>Arrival Airport: </Form.Label>
                            <text>{flight.arrivalAirport}</text>
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formPassengerLimit">
                            <Form.Label><br></br> Passenger Limit: </Form.Label>
                            <text>{flight.passengerLimit}</text>
                        </Form.Group>

                        <button onClick={deleteFlight}>Delete Flight</button>
                    </div>
                </Form>}
            </Center>
        </div>
    )
}