import { createContext } from "react";

// Let's create a theme object to use with our context
export const themes = {
    light: {
        backgroundColor: '#F6F5F5',
        color: 'black'
    },
    dark: {
        backgroundColor: '#221D1D',
        color: 'white'
    },
    darkGray: {
        backgroundColor: '#282c34',
        color: 'white'
    }
};

const ThemeContext = createContext(themes.light);

export default ThemeContext;