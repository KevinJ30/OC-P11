import React from 'react';

class List extends React.Component {
    constructor(props) {
        super();
        this.security(props);
    }

    security(props) {
        if(!props.elements) {
            // eslint-disable-next-line no-throw-literal
            const err = new Error('No list contains elements'); 
            throw err;
        }

        if(typeof props.elements[0] !== 'object') {
            const err = new Error('The list does not contain object elements')
            throw err;
        }

        if(!props.elements[0].hasOwnProperty('text')) {
            const err = new Error('The object in the list doesn\'t contain property text');
            throw err;
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