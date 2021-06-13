import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IconArrowLeft, IconArrowRight } from '../../icons/icons';
import './carroussel.scss';

class Carroussel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1
        }

        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
    }

    handleRight() {
        const selected = this.state.selected >= this.props.children.length ? 1 : this.state.selected + 1;
        this.setState({selected: selected});
    }

    handleLeft() {
        const selected = this.state.selected <= 1 ? this.props.children.length : this.state.selected - 1;
        this.setState({selected: selected});
    }

    render() { 
        return (
            <div className="carroussel">
                <button className="carroussel__btn-left" onClick={this.handleLeft}><IconArrowLeft /></button>
                
                {this.props.children[this.state.selected - 1]}               
                
                <button className="carroussel__btn-right" onClick={this.handleRight}><IconArrowRight /></button>
                <span className="carroussel__counter">
                    {this.state.selected}/{this.props.children.length}        
                </span>
            </div>
        );
    }
}
 
export default Carroussel;