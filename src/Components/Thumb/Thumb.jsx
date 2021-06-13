import React from 'react';
import './thumb.scss';


class Thumb extends React.Component {
    constructor(props) {
        super(props);

        if(props.url_img === undefined) {
            const err = Error('The component doesn\'t contain url_img property');
            throw err;
        }
    }

    render() { 
        return <div className="thumb filter">
            { 
                this.props.title &&
                <h3 className="thumb__title">{this.props.title}</h3>
            }
            <img className="thumb__img" src={this.props.url_img} alt="bg_thumb" />
       </div>;
    }
}
 
export default Thumb;