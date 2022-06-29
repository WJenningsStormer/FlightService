import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ThemeContext from '../contexts/ThemeContext';
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

// This is an opinionated NavBar
export const AppNav = () => {
    const theme = useContext(ThemeContext); // When the context Provider changes in App.jsx, this component will rerender

    const { username } = useSelector(store => store);

    return (
        <Nav backgroundColor={theme.backgroundColor} color={theme.color}>
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
            </NavSection>
        </Nav>
    );
}