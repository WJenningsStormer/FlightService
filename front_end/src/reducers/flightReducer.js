const initialState = {
    flightNumber: '',
    flights: []
};

// userReducer should return the new state for this reducer
export const flightReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_FLIGHT':
            //Adds flight to the list of flights
            console.log('Adding Flight');
            return {...state, flights: [...state.flights, action.payload]};
        case 'UPDATE_FLIGHT':
            //Updates a flight 
            return {...state, flights: [state.flights?.filter(flight => flight.flightNumber !== state.lightNumber), action.payload]};
        case 'REMOVE_FLIGHT':
            return { ...state, flights: state.flights?.filter(flight => flight !== action.payload)};
        default:
            return state; // Returns the previous state. AKA make no changes
    }
}