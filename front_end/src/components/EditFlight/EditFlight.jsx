import { useRef, useState, useForm } from 'react';
import { Form } from 'react-bootstrap';
import { Center } from "../StylePractice";
import { useNavigate } from 'react-router-dom';
import './EditFlight.css';
import axios from 'axios';

export const EditFlight = () => {
    //this.onSearch.bind(this);
    //this.displayFlight.bind(this);

    const [flight, setFlight] = useState();
    const navigate = useNavigate();

    const FlightNumberRef = useRef();
    const DepartureDateRef = useRef();
    const ArrivalDateRef = useRef();
    const DepartureTimeRef = useRef();
    const ArrivalTimeRef = useRef();
    const DepartureAirportRef = useRef();
    const ArrivalAirportRef = useRef();
    const PassengerCountRef = useRef();
    const PassengerLimitRef = useRef();

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

    const handleUpdate = async e => {
        e.preventDefault();
        let currFlightNumber = FlightNumberRef.current.value;
        let passCount = PassengerCountRef.current.value;
        let passLimit = PassengerLimitRef.current.value;
        let spacesLeft = passLimit - passCount;

        if(spacesLeft < 0) {

            alert(`The amount of passengers given: '${passCount}' exceeds the given passenger limit: '${passLimit}'.
                    \nPlease fix this before further editing this flight.`);

        } else {
            try {
                console.log(currFlightNumber);
                await axios.put(`http://localhost:8085/flights/${currFlightNumber}`, {
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
                setFlight();
            } catch (error) {
                console.log(error);
            }
        }
    }

    const autoPopulate = async e => {
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
        }
        e.preventDefault();
    }

    return(
        <div>
            <Center>
                <Form>
                    <label>Flight Number</label><div><input type = "text" id="FlightNumber" ref={FlightNumberRef}/></div>

                    {!flight && 
                    <button onClick={autoPopulate}>Search</button>}

                    {flight && <div>
                    <label>Departure Date</label><div><input type = "text" id="DepartureDate" defaultValue={flight.departureDate} ref={DepartureDateRef}/></div>

                    <label>Arrival Date</label><div><input type = "text" id="ArrivalDate" defaultValue={flight.arrivalDate} ref={ArrivalDateRef}/></div>

                    <label>Departure Time</label><div><input type = "text" id="DepartureTime" defaultValue={flight.departureTime} ref={DepartureTimeRef}/></div>
                    
                    <label>Arrival Time</label><div><input type = "text" id="ArrivalTime" defaultValue={flight.arrivalTime} ref={ArrivalTimeRef}/></div>
                    
                    <label htmlFor="DepartureAirportName">Departure Airport</label><div><input type = "text" id="DepartureAirport" defaultValue={flight.departureAirport} ref={DepartureAirportRef}/></div>

                    <label htmlFor="ArrivalAirportName">Arrival Airport</label><div><input type = "text" id="ArrivalAirport" defaultValue={flight.arrivalAirport} ref={ArrivalAirportRef}/></div>

                    <label htmlFor="PassengersCount">Number of Passengers</label><div><input type = "text" id="PassengersCount" defaultValue={flight.passengerCount} ref={PassengerCountRef}/></div>
                    <label htmlFor="PassengersLimit">Limit Of Passengers</label><div><input type = "text" id="PassengersLimit" defaultValue={flight.passengerLimit} ref={PassengerLimitRef}/></div>
                    
                    <button onClick={handleUpdate}>Update</button>
                    </div>}
                </Form>
            </Center>
        </div>
    )
}