import React from 'react'
import Logo from "../Components/Logo/Logo";
import Navigation from './Navigation';

class Header extends React.Component {
    render() { 
        return (
            <header className="page__header">
                <Logo />
                <Navigation />
            </header>
        );
    }
}
 
export default Header;