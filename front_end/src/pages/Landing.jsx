import { useState } from "react";
import { useSelector } from "react-redux";
import { FlightList } from "../components/FlightList";

export const Landing = () => {
    
    const [shouldRender, setShouldRender] = useState(true);

    const toggleComponent = () => {
        setShouldRender(!shouldRender);
    }

    const username = useSelector(store => store.username);

    return (
        <FlightList />
    )
}