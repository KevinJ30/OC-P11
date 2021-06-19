import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location : window.location
        }

        this.handleLink = this.handleLink.bind(this);
    }
    
    handleLink() {
        this.setState({
            location: window.location
        })
    }

    render() {
        return (
            <nav className="nav">
                <Link to="/" className={this.state.location.pathname === '/' ? "nav-item active" : "nav-item"} onClick={this.handleLink}>Accueil</Link>
                <Link to="/about" className={this.state.location.pathname === '/about' ? "nav-item active" : "nav-item"} onClick={this.handleLink}>A propos</Link>
            </nav>
        );
    }
}
 
export default Navigation;