import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Center } from "../StylePractice";
import './AddFlight.css';
import axios from 'axios';

export const AddFlight = () => {
    //this.handleSubmit.bind(this);

    const FlightNumberRef = useRef();
    const DepartureDateRef = useRef();
    const ArrivalDateRef = useRef();
    const DepartureTimeRef = useRef();
    const ArrivalTimeRef = useRef();
    const DepartureAirportRef = useRef();
    const ArrivalAirportRef = useRef();
    const PassengerCountRef = useRef();
    const PassengerLimitRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        let passCount = PassengerCountRef.current.value;
        let passLimit = PassengerLimitRef.current.value;
        let spacesLeft = passLimit - passCount;

        if(spacesLeft < 0) {

            alert(`The amount of passengers given: '${passCount}' exceeds the given passenger limit: '${passLimit}'.
                    \nPlease fix this before further editing this flight.`);

        } else {
            try {
                console.log(DepartureDateRef.current.value);
                await axios.post('http://localhost:8085/flights', {
                    flightNumber: FlightNumberRef.current.value, 
                    departureDate: DepartureDateRef.current.value,
                    arrivalDate: ArrivalDateRef.current.value,
                    departureTime: DepartureTimeRef.current.value, 
                    arrivalTime: ArrivalTimeRef.current.value, 
                    departureAirport: DepartureAirportRef.current.value,
                    arrivalAirport: ArrivalAirportRef.current.value, 
                    passengerCount: PassengerCountRef.current.value, 
                    passengerLimit: PassengerLimitRef.current.value});
                navigate('./', {replace: true});
                ClearForm();
            } catch (error) {
                console.log(error);
            }
        }
    }

    const ClearForm = () => {
        FlightNumberRef.current.value = null;
        DepartureDateRef.current.value = null;
        ArrivalDateRef.current.value = null;
        DepartureTimeRef.current.value = null;
        ArrivalTimeRef.current.value = null;
        DepartureAirportRef.current.value = null;
        ArrivalAirportRef.current.value = null;
        PassengerCountRef.current.value = null;
        PassengerLimitRef.current.value = null;
    }

    return(
            <div>
                <header>New Flight</header>
                <Center>
                    <Form>
                        <label>Flight Number: </label><div><input type = "text" id="FlightNumber" ref={FlightNumberRef}/></div>

                        <label>Departure Date: </label><div><input type = "text" id="DepartureDate" ref={DepartureDateRef}/></div>

                        <label>Arrival Date: </label><div><input type = "text" id="ArrivalDate" ref={ArrivalDateRef}/></div>

                        <label>Departure Time: </label><div><input type = "text" id="DepartureTime" ref={DepartureTimeRef}/></div>
                        
                        <label>Arrival Time: </label><div><input type = "text" id="ArrivalTime" ref={ArrivalTimeRef}/></div>
                        
                        <label htmlFor="DepartureAirportName">Departure Airport: </label><div><input type = "text" id="DepartureAirport" ref={DepartureAirportRef}/></div>

                        <label htmlFor="ArrivalAirportName">Arrival Airport: </label><div><input type = "text" id="ArrivalAirport" ref={ArrivalAirportRef}/></div>

                        <label htmlFor="PassengersCount">Number of Passengers: </label><div><input type = "text" id="PassengersCount" ref={PassengerCountRef}/></div>
                        <label htmlFor="PassengersLimit">Limit Of Passengers: </label><div><input type = "text" id="PassengersLimit" ref={PassengerLimitRef}/></div>
                        
                        <button onClick={handleSubmit}>Submit</button>
                    </Form>
                </Center>
            </div>
    )
}