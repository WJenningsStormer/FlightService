import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features';
import { Landing,  FlightCreation, FlightSearch, EditFlightPage, Error } from './pages';
import { ActorForm } from './components/ActorForm';
import ThemeContext, { themes } from './contexts/ThemeContext';
import "./App.css";

// React function based component

const App = () => {
    // Whatever is returned from these functions will be what is rendered

    const [currTheme, setCurrTheme] = useState(themes.darkGray);

    const toggleTheme = () => {
        if (currTheme === themes.light) {
            setCurrTheme(themes.darkGray);
        } else if (currTheme === themes.darkGray) {
            setCurrTheme(themes.dark);
        } else {
            setCurrTheme(themes.light);
        }
    }

    return (
        // This wraps all of its children in the context, all children can read from it
        <ThemeContext.Provider value={currTheme}>
            <style>{"body { background-color: #1F2833; }"}</style>
            {/* Everything in here is going to managed by react-router-dom so that it can toggle between pages */}
            <BrowserRouter>
            <AppNav />
                <Routes>
                    {/* When the URL in the browser becomes /, toggle on the Landing page */}
                    <Route path="/" element={<div><header>Existing Scheduled Flights</header> <Landing /> </div>} />
                    <Route path="/creation" element={<FlightCreation />} />
                    <Route path="/search" element={<FlightSearch />} />
                    <Route path="/edit" element={<EditFlightPage />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );   
}

export const a = 'A'; // This is a regular export. Also sometimes a "named export" since you have to refer to it by variable name

export default App; // Only one default per file
// Default exports can renamed in the other file