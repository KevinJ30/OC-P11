import React from 'react';

class Thumb extends React.Component {
    constructor(props) {
        super(props);

        if(props.url_img === undefined) {
            throw('The component doesn\'t contain url_img property');
        }
    }

    render() { 
        return <div className="thumb">
            <h3 className="thumb__title">{this.props.title}</h3>
       </div>;
    }
}
 
export default Thumb;