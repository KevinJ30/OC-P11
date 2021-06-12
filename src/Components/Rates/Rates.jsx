import React from 'react';
import {IconStars} from "../../icons/icons";

class Rates extends React.Component {

    constructor(props) {
        super(props);

        if(props.rating === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw('The component does not contain property rating.');
        }

        if(typeof props.rating !== 'number') {
            // eslint-disable-next-line no-throw-literal
            throw('The property rating is not number.');
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