import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <nav className="nav">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">A propos</a></li>
            </nav>
        );
    }
}
 
export default Navigation;