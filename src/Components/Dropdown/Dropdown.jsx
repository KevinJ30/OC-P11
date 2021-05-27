import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super();
        this.children = props.children ? props.children : null;
        console.log(this.children)
        if(props.title) {
            this.title = props.title;
        }
        else {
            console.error("Il manque la propriété \"title\" sur le composant dropdown");
        }
    }

    render() {
       if(this.title) {
            return <div className="dropdown">
                    <div className="dropdown__header">
                        <p class="dropdown__header-title">{this.title}</p>
                        <span class="icon icon_arrow-up"></span>
                    </div>

                    <div className="dropdown__content">
                        { this.children }
                    </div>
            </div>;
       }

       return null;
    }

}

export default Dropdown;