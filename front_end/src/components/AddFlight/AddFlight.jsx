import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFlight.css';
import axios from 'axios';

export const AddFlight = () => {
    //this.handleSubmit.bind(this);

    const FlightNumberRef = useRef();
    const DepartureDateRef = useRef([]);
    const ArrivalDateRef = useRef([]);
    const DepartureTimeRef = useRef([]);
    const ArrivalTimeRef = useRef([]);
    const DepartureAirportRef = useRef([]);
    const ArrivalAirportRef = useRef([]);
    const PassengerCountRef = useRef();
    const PassengerLimitRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            console.log(FlightNumberRef.currentValue);
            console.log(DepartureDateRef.currentValue);
            console.log(ArrivalDateRef.currentValue);
            console.log(DepartureTimeRef.currentValue);
            console.log(ArrivalTimeRef.currentValue);
            console.log(DepartureAirportRef.currentValue);
            console.log(ArrivalAirportRef.currentValue);
            console.log(PassengerCountRef.currentValue);
            console.log(PassengerLimitRef.currentValue);
            await axios.post('http://localhost:8085/flights', {FlightNumber: FlightNumberRef.currentValue, DepartureDate: DepartureDateRef.currentValue, ArrivalDate: ArrivalDateRef.currentValue,
                                                                DepartureTime: DepartureTimeRef.currentValue, ArrivalTime: ArrivalTimeRef.currentValue, DepartureAirport: DepartureAirportRef.currentValue,
                                                                ArrivalAirport: ArrivalAirportRef.currentValue, PassengerCount: PassengerCountRef.currentValue, PassengerLimit: PassengerLimitRef.currentValue});
            navigate('../', {replace: true});
        } catch (error) {
            console.log(error);
        }
    }

    return(
            <div>
                <label htmlFor="FlightNumber">Flight Number</label><div><input type = "text" id="FlightNumber" ref={FlightNumberRef}/></div>

                <label>Departure Date</label>
                <div><label>(dd/mm/yyyy):  </label><select type="text" value={DepartureDateRef[0]}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select><label>/</label><select type = "text" value={DepartureDateRef[1]}>
                <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select><label>/</label><select type = "boolean" value={DepartureDateRef[2]}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select></div>
                
                <label>Arrival Date</label>
                <div><label>(dd/mm/yyyy):  </label><select type = "text" value={ArrivalDateRef[0]}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select><label>/</label><select type = "text" value={ArrivalDateRef[1]}>
                <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select><label>/</label><select type = "boolean" value={ArrivalDateRef[2]}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select></div>

                <label>Departure Time</label>
                <div><label></label><select type = "text" value={DepartureTimeRef[0]}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select><label></label><select type = "text" value={DepartureTimeRef[1]}>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </select><select type = "boolean" value={DepartureTimeRef[2]}>
                    <option value={true}>A.M.</option>
                    <option value={false}>P.M.</option>
                </select></div>

                <label>Arrival Time</label>
                <div><label></label><select type = "text" value={ArrivalTimeRef[0]}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select><label></label><select type = "text" value={ArrivalTimeRef[1]}>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </select><select type = "boolean" value={ArrivalTimeRef[2]}>
                    <option value={true}>A.M.</option>
                    <option value={false}>P.M.</option>
                </select></div>

                <label htmlFor="DepartureAirportName">Departure Airport: Name</label><div><input type = "text" id="DepartureAirportName" ref={DepartureAirportRef[0]}/></div>
                <label htmlFor="DepartureAirportTag">Departure Airport: Tag</label><div><input type = "text" id="DepartureAirportTag" ref={DepartureAirportRef[1]}/></div>

                <label htmlFor="ArrivalAirportName">Arrival Airport: Name</label><div><input type = "text" id="ArrivalAirportName" ref={ArrivalAirportRef[0]}/></div>
                <label htmlFor="ArrivalAirportTag">Arrival Airport: Tag</label><div><input type = "text" id="ArrivalAirportTag" ref={ArrivalAirportRef[1]}/></div>

                <label htmlFor="PassengersCount">Number of Passengers</label><div><input type = "text" id="PassengersCount" ref={PassengerCountRef}/></div>
                <label htmlFor="PassengersLimit">Limit Of Passengers</label><div><input type = "text" id="PassengersLimit" ref={PassengerLimitRef}/></div>
                
                <button1 onClick={handleSubmit}>Submit</button1>
            </div>
    )
}