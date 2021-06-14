import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <nav className="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">A propos</Link>
            </nav>
        );
    }
}
 
export default Navigation;