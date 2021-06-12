import React from 'react';

class List extends React.Component {
    constructor(props) {
        super();
        this.security(props);
    }

    security(props) {
        if(!props.elements) {
            // eslint-disable-next-line no-throw-literal
            throw('No list contains elements');
        }

        if(typeof props.elements[0] !== 'object') {
            // eslint-disable-next-line no-throw-literal
            throw('The list does not contain object elements');
        }

        if(!props.elements[0].hasOwnProperty('text')) {
            // eslint-disable-next-line no-throw-literal
            throw('The object in the list doesn\'t contain property text');
        }

        this.elements = props.elements;
    }

    render() { 
        if(this.elements) {
            return ( 
                <ul>
                    { this.elements.map(item => <li key={item.text}>{item.text}</li>) }
                </ul>
            );
        }
        return null;
    }
}
 
export default List;