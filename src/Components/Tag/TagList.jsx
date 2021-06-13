import React from 'react';
import Tag from './Tag';

import './tag.scss';

class TagList extends React.Component {
    constructor(props) {
        super(props);

        if(props.list === undefined) {
            const err = Error('The component doesn\'t contain list property');
            throw err;
        }
        
        if(!Array.isArray(props.list)) {
            const err = Error('The list property doesn\'t array type');
            throw err;
        }
    }

    render() { 
        return <div className="tags">
            {
                this.props.list.map((name, i) => <Tag key={i} name={name} />)
            }
        </div>;
    }
}
 
export default TagList;