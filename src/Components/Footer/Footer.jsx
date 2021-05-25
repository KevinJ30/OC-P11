import './footer.css';

import React from 'react';
import Logo from '../Logo/Logo';

class Footer extends React.Component {
    render() {
        return <footer>
                    <div className="logo">
                        <Logo color="#fff" />
                    </div>
                    <div className="copyright">
                        <p>© 2020 Kasa. All rights reserved</p>
                    </div>
                </footer>;
    }
}

export default Footer;