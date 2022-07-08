import { useContext } from 'react';
import { useSelector } from 'react-redux';
import logo from './AirInnovations.ico';
import slogan from './SloganImg.ico';
import ThemeContext from '../contexts/ThemeContext';
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

// This is an opinionated NavBar
export const AppNav = () => {
    const theme = useContext(ThemeContext); // When the context Provider changes in App.jsx, this component will rerender

    const { username } = useSelector(store => store);

    return (
        <Nav backgroundColor={'#0B0C10'} color={theme.color} fontFamily={'Trebuchet MS, Helvetica, sans-serif'}>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/creation">New Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/search">Flight Search</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/edit">Edit Flight</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}