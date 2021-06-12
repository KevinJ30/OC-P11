import React from 'react';
import Tag from './Tag';

import './tag.scss';

class TagList extends React.Component {
    constructor(props) {
        super(props);

        if(props.list === undefined) {
            throw('The component doesn\'t contain list property');
        }
        
        if(!Array.isArray(props.list)) {
            throw('The list property doesn\'t array type');
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