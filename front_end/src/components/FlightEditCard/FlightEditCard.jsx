export const FlightEditCard = flight => {

    return (
        <div>
            <div key={flight._id}>
                <div><strong>Flight Number: {flight.flightNumber}</strong></div>
                <div><strong>Departure Date: {flight.departureDate.month}/{flight.departureDate.day}/{flight.departureDate.year}</strong></div>
                <div><strong>Arrival Date: {flight.arrivalDate.month}/{flight.arrivalDate.day}/{flight.arrivalDate.year}</strong></div>
                <div><strong>Departure Time: {flight.departureTime.hour}:{flight.departureTime.minute} {(flight.departureTime.isBeforeMidday) ? 'A.M.' : 'P.M.'}</strong></div>
                <div><strong>Arrival Time: {flight.arrivalTime.hour}:{flight.arrivalTime.minute} {(flight.arrivalTime.isBeforeMidday) ? 'A.M.' : 'P.M.'}</strong></div>
                <div><strong>Departure Airport: {flight.departureAirport.airportName} {flight.departureAirport.airportTag}</strong></div>
                <div><strong>Arrival Airport: {flight.arrivalAirport.airportName} {flight.arrivalAirport.airportTag}</strong></div>
                <div><strong>Number of Passengers: {flight.passengerCount}</strong></div>
            </div>
        </div>
    )
} 