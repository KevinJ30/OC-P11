import React from 'react';
import { IconArrowLeft, IconArrowRight } from '../../icons/icons';
import './carrousel.scss';

class Carrousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
            animated: false
        }

        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
    }

    handleRight() {
        const selected = this.state.selected >= this.props.children.length ? 1 : this.state.selected + 1;
        this.setState({
            selected: selected,
            animated: true
        });
    }

    handleLeft() {
        const selected = this.state.selected <= 1 ? this.props.children.length : this.state.selected - 1;
        this.setState({
            selected: selected,
            animated: true
        });
    }

    render() { 
        return (
            <div className="carrousel">
                <button className="carrousel__btn-left" onClick={this.handleLeft}><IconArrowLeft /></button>

                {this.props.children[this.state.selected - 1]}

                <button className="carrousel__btn-right" onClick={this.handleRight}><IconArrowRight /></button>
                <span className="carrousel__counter">
                    {this.state.selected}/{this.props.children.length}        
                </span>
            </div>
        );
    }
}
 
export default Carrousel;