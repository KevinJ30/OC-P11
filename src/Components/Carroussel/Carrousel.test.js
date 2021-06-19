import {fireEvent, render} from '@testing-library/react';
import Carrousel from './Carrousel';

const component = <Carrousel>
                    <img src="image-1" alt="image-1" />
                    <img src="image-2" alt="image-2" />
                    <img src="image-3" alt="image-3" />
                  </Carrousel>;
/**
 * Rend le composant et click sur le bouton passé en parametre
 * 
 * @param {string} buttonName Nom du bouton
 * @param {number} numberClick Nombre de clique 
 **/
function eventClick(buttonName, numberClick = 1) {
    const button = document.querySelector('.carrousel__btn-' + buttonName);
    
    for(let i = 0; i < numberClick; i++) {
        fireEvent.click(button);
    }
}

const assertCounter = (value) => {
    const counter_element = document.querySelector('.carrousel__counter');
    expect(counter_element.innerHTML).toBe(value);
}

describe('Test component Carrousel', () => {

    it('should load without error', () => {
        render(component);
    })

    describe('Display component', () =>  {
        it('should contain the counter element', () => {
            render(component);
            const counter_element = document.querySelector('.carrousel__counter');
            expect(counter_element).not.toBe(null);
        })

        it('when load component the counter should display 1/3', () => {
            render(component);
            assertCounter('1/3');
        })
    })

    describe('Event component', () => {

       describe('When click right button', () => {
           it('should selected next image', () => {
                render(component);
                eventClick('right');
                assertCounter('2/3');
           })

           it('should display image-1 when click on the last image', () => {
                render(component);
                eventClick('right', 3);
                assertCounter('1/3');
           })
       })
        
       describe('When click left button', () => {
            it('should selected prevent image', () => {
                render(component);
                eventClick('right', 2);
                eventClick('left');
                assertCounter('2/3');
            })

            it('should change number image selected on the counter', () => {
                render(component);
                eventClick('right', 2); 
                eventClick('left');
                assertCounter('2/3')
            })

            it('should display image-1 when click on the last image', () => {
                render(component);
                eventClick('left');
                assertCounter('3/3');
            })
            
            it('should display next image when right key pressed', () => {
                render(component);
                const carrousel = document.querySelector('.carrousel');
                fireEvent.keyUp(carrousel, {key: 'ArrowRight'});

                assertCounter('2/3');
            })

            it('should display next image when right key pressed', () => {
                render(component);
                const carrousel = document.querySelector('.carrousel');
                fireEvent.keyUp(carrousel, {key: 'ArrowRight'});
                fireEvent.keyUp(carrousel, {key: 'ArrowLeft'});

                assertCounter('1/3');
            })
        })
    })
})