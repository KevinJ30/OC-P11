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
            throw('The component must contain name property');
        }
    }

    render() { 
        return <span className="tag">{this.props.name}</span>;
    }
}

export default Tag;