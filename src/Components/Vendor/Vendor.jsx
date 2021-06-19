import React from 'react';
import Rates from '../Rates/Rates';
import './vendor.scss';

class Vendor extends React.Component {
    constructor(props) {
        super(props);

        if(props.firstname === undefined) {
            const err = "The component doesn't contain firstname property";
            throw err;
        }

        if(props.lastname === undefined) {
            const err = "The component doesn't contain lastname property";
            throw err;
        }

        if(props.avatar_url === undefined) {
            const err = "The component doesn't contain avatar_url property";
            throw err;
        }

        if(props.rating === undefined) {
            const err = "The component doesn't contain rating property";
            throw err;
        }
    }

    render() { 
        return (  
            <div className="vendor">
                <div className="vendor__informations">
                    <div className="name">
                        <span className="vendor_firstname">{this.props.firstname}</span>
                        <span className="vendor_lastname">{this.props.lastname}</span>
                    </div>

                    <div className="vendor__avatar">
                        <img src={this.props.avatar_url} alt="avatar" />
                    </div>
                </div>

                <div className="vendor__rates">
                    <Rates rating={this.props.rating} />
                </div>
            </div>
        );
    }
}
 
export default Vendor;