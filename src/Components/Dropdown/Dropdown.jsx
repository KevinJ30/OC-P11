import React from 'react';
import { IconsArrowDown, IconsArrowUp } from '../../icons/icons';

import './dropdown.scss';

/**
 * class Dropdwon
 * ---------------
 * Créer par Jodurier Kevin
 * 
 * @property {string} title Titre de la dropdown
 * @property {ReactNode} children enfant du composant
 * @property {{visible: boolean}} state État du composant
 * 
 **/
class Dropdown extends React.Component {

    constructor(props) {
        super();

        this.security(props);

        this.children = props.children ? props.children : null;
        this.state = { visible: true }
        
        this.bindEvents();
    }

    /**
     * Sécurise le composant si il manque des propriété
     * 
     * @param {*} props 
     **/
    security(props) {
        if(props.title) {
            this.title = props.title;
        }
        else {
            const err = Error("The title property is required (title=\"My title\")")
            throw err;
        }
    }

    /**
     * Lie les événements avec la classe
     * 
     * @return {void}
     **/
    bindEvents() {
        this.onButtonVisible = this.onButtonVisible.bind(this);
    }

    /**
     * Change l'icone du bouton quand le status du composant change
     * 
     * @returns {string} Nouvelle icone
     **/
    displayIcon() {
        if(this.state.visible) {
            return <IconsArrowDown />;
        }

        return <IconsArrowUp />;
    }

    /**
     * Change la classe du contenu quand le status du composant change
     * 
     * @returns {string} Nouvelle classes
     **/
    contentClassName() {
        let className = 'dropdown__content ';
        className += this.state.visible ? 'visible' : '';

        return className;
    }


    /**
     * Évenement du bouton qui permet de rendre visible le contenu
     * 
     * @param {Event} event 
     **/
    onButtonVisible(event) {
        event.preventDefault();
        this.setState({visible: !this.state.visible})
    }

    /**
     * Affcihe le composant dropdown
     * 
     * @returns {HTMLElement|null} Composant dropdown 
     **/
    render() {
       if(this.title) {
            return <div className="dropdown">
                    <div className="dropdown__header">
                        <p className="dropdown__header-title">{this.title}</p>
                        <button onClick={this.onButtonVisible}>
                            { this.displayIcon() }
                        </button>
                    </div>

                    <div className={this.contentClassName()}>
                        <div className="dropdown__content-wrapper">
                            { this.children }
                        </div>
                    </div>
            </div>;
       }

       return null;
    }

}

export default Dropdown;