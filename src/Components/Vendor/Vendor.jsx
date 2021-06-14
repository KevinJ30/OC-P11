import React from 'react';
import Rates from '../Rates/Rates';
import './vendor.scss';

class Vendor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <div className="vendor">
                <div className="vendor__informations">
                    <div className="name">
                        <span class="vendor_firstname">{this.props.firstname}</span>
                        <span class="vendor_lastname">{this.props.lastname}</span>
                    </div>

                    <div className="vendor__avatar">
                        <img src={this.props.avatar_url} alt="avatar" />
                    </div>
                </div>

                <div className="vendor__rates">
                        <Rates rating={2} />
                </div>
            </div>
        );
    }
}
 
export default Vendor;