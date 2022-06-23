import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features';
import { Landing,  FlightCreation, FlightSearch, Error } from './pages';
import ThemeContext, { themes } from './contexts/ThemeContext';

const App = () => {

    const [currTheme, setCurrTheme] = useState(themes.light);

    const toggleTheme = () => {
        if (currTheme === themes.light) {
            setCurrTheme(themes.dark);
        } else {
            setCurrTheme(themes.light);
        }
    }

    return (
        // This wraps all of its children in the context, all children can read from it
        <ThemeContext.Provider value={currTheme}>
            {/* Everything in here is going to managed by react-router-dom so that it can toggle between pages */}
            <BrowserRouter>
                <AppNav />
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Routes>
                    {/* When the URL in the browser becomes /, toggle on the Landing page */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/creation" element={<FlightCreation />} />
                    <Route path="/search" element={<FlightSearch />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );   
}

export default App; // Only one default per file