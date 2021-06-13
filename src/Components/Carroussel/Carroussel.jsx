import React from 'react';

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
        const selected = this.state.selected > this.props.children.length ? 1 : this.state.selected + 1;
        this.setState({selected: selected});
    }

    handleLeft() {
        const selected = this.state.selected <= 1 ? this.props.children.length : this.state.selected - 1;
        this.setState({selected: selected});
    }

    render() { 
        return (
            <div className="Carroussel">
                <button className="carroussel__btn-left" onClick={this.handleLeft}><span className="icon icon-arrow-left"></span></button>
                {this.props.children[this.state.selected - 1]}
                <span className="carroussel__counter">
                    {this.state.selected}/{this.props.children.length}        
                </span>
                <button className="carroussel__btn-right" onClick={this.handleRight}><span className="icon icon-arrow-right"></span></button>
            </div>
        );
    }
}
 
export default Carroussel;