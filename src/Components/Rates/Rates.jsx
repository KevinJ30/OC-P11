import React from 'react';
import {IconStars} from "../../icons/icons";

import './rates.scss';

class Rates extends React.Component {

    constructor(props) {
        super(props);

        if(props.rating === undefined) {
            const err = 'The component does not contain property rating.'; 
            throw err;
        }

        if(typeof props.rating !== 'number') {
            const err = 'The property rating is not number.'; 
            throw err;
        }

        // On créer un tableaux conetnant les étaoiles
        this.stars = [];

        for(let i = 0; i < 5; i++) {
            this.stars.push(<IconStars className={i < Math.trunc(this.props.rating) ? 'active' : null} key={i} />);
        }
    }

    render() {
        return <React.Fragment>
            <div className="rates">
                { this.stars.map((star, i) => star) }
            </div>
        </React.Fragment>;
    }

}

export default Rates;