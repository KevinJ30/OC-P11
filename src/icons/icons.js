import React from 'react';

import './icons.scss';

/**
 * Retourne une icone d'étoile
 * 
 * @returns Icon stars 
 **/
export function IconStars(props, children) {

    function className() {
        let classname = "icon icon-stars";
        return props.className ? classname + " active" : classname;
    }

    return (
        <span className={className()}>
            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="currentColor"/>
            </svg>
        </span>
    );

}

/**
 * Retourne un icon de flêche en bas 
 * 
 * @returns Icon arrow down 
 **/
export function IconsArrowDown() {
    return (
        <span className="icon icon-arrow-down">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.84 23.3466L29.2 20.9733L16 7.78662L2.80003 20.9866L5.16003 23.3466L16 12.5066L26.84 23.3466Z" fill="currentColor"/>
            </svg>
        </span>
    );
}

/**
 * Retourne un icon de flêche en bas 
 * 
 * @returns Icon arrow down 
 **/
 export function IconsArrowUp() {
    return (
        <span className="icon icon-arrow-up">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.84 23.3466L29.2 20.9733L16 7.78662L2.80003 20.9866L5.16003 23.3466L16 12.5066L26.84 23.3466Z" fill="currentColor"/>
            </svg>
        </span>
    );
}

export function IconArrowLeft() {
    return <span className="icon icon-arrow-left">
                <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="currentColor"/>
                </svg>
            </span>;
}

export function IconArrowRight() {
    return <span className="icon icon-arrow-right">
                <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="currentColor"/>
                </svg>
            </span>;
}

