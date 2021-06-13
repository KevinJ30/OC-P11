import React from 'react';

import './tag.scss';

/**
 * Component Tag
 * -------------
 * 
 * Créer par Joudrier Kevin
 **/
class Tag extends React.Component {
    constructor(props) {
        super(props);

        if(props.name === undefined) {
            const err = new Error('The component must contain name property');
            throw err;
        }
    }

    render() { 
        return <span className="tag">{this.props.name}</span>;
    }
}

export default Tag;