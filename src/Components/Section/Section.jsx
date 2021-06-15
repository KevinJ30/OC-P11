import './section.scss';
import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.src = props.src;
        this.color = props.color;
        this.text = props.text;
    }

    displayImage() {
        if(this.src) {
            return <img src={this.src} alt="section" />
        }
        
        return null;
    }

    style() {
        if(this.color) {
            return {background:this.color}
        }

        return null;
    }


    displayText() {
        if(this.text) {
            return <p>{this.text}</p>;
        }

        return null;
    }

    render() { 
        return (  
            <div data-testid="background" className="section" style={this.style()}>
                { this.displayText() }
                { this.displayImage() }
            </div>
        );
    }
}
 
export default Section;