import React from 'react';

import './icons.scss';

/**
 * Retourne une icone d'étoile
 * 
 * @returns Icon stars 
 **/
export function IconStars() {

    return (
        <span class="icon icon-stars">
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
        <span class="icon icon-arrow-down">
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
        <span class="icon icon-arrow-up">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.84 23.3466L29.2 20.9733L16 7.78662L2.80003 20.9866L5.16003 23.3466L16 12.5066L26.84 23.3466Z" fill="currentColor"/>
            </svg>
        </span>
    );
}

