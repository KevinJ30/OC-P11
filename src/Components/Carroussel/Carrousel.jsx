import React from 'react';
import './carrousel.scss';

/**
 *  @const LEFT direction de l'animation
 *  @const RIGHT direction de l'animation
 **/
const LEFT = 0;
const RIGHT = 1;

/**
 * Composant carrousel
 * -------------------
 * 
 * Créé par Joudrier Kevin
 **/
class Carrousel extends React.Component {

    constructor(props) {
        super(props);

        this.sliderRef = React.createRef();

        this.state = {
            selected: 1,
            direction: null
        }

        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    /**
     * Mise à jour de la position du slider au changement d'élément séléctionné
     **/
    componentDidUpdate() {
        const image_width = this.sliderRef.current.children[0].clientWidth;
        const position_x = image_width * (this.state.selected - 1);
        this.sliderRef.current.style.transform = "translateX(-" + position_x + "px)";
    }

    /**
     * Évenement du bouton droit
     * 
     * @param {Event} event
     **/
    handleRight(event) {
        event.preventDefault();

        this.setState({
            selected: this.state.selected >= this.props.children.length ? 1 : this.state.selected + 1,
            direction: RIGHT
        });
    }

    /**
     * Évenement du bouton gauche
     * 
     * @param {Event} event
     **/
    handleLeft(event) {
        event.preventDefault();
        
        this.setState({
            selected: this.state.selected <= 1 ? this.props.children.length : this.state.selected - 1,
            direction: LEFT
        });
    }

    /**
     * Évenement du clavier
     * 
     * @param {Event} event 
     **/
    handleKeyUp(event) {
        switch(event.key) {
            case "ArrowRight":
                this.setState({
                    selected: this.state.selected >= this.props.children.length ? 1 : this.state.selected + 1,
                    direction: RIGHT
                });
                break;

            case "ArrowLeft":
                this.setState({
                    selected: this.state.selected <= 1 ? this.props.children.length : this.state.selected - 1,
                    direction: LEFT
                });
                break;
        }
    }

    render() { 
        return (
            <div onKeyUp={this.handleKeyUp} className="carrousel">
                <div ref={this.sliderRef} className="carrousel__slider">
                    {this.props.children}
                </div>

                <div className="carrousel__counter">
                    {this.state.selected}/{this.props.children.length}
                </div>

                <div className="carrousel__actions">
                    <button className="carrousel__btn carrousel__btn-left" onClick={this.handleLeft}>
                        <span className="icon">
                            <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                                    fill="currentColor"/>
                            </svg>
                        </span>
                    </button>

                    <button className="carrousel__btn carrousel__btn-right" onClick={this.handleRight}>
                        <span className="icon">
                            <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                                    fill="currentColor"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}
 
export default Carrousel;