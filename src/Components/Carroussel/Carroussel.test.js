import {fireEvent, render} from '@testing-library/react';
import Carroussel from './Carroussel';

const component = <Carroussel>
                    <img src="image-1" alt="image-1" />
                    <img src="image-2" alt="image-2" />
                    <img src="image-3" alt="image-3" />
                  </Carroussel>;
/**
 * Rend le composant et click sur le bouton passé en parametre
 * 
 * @param {string} buttonName Nom du bouton
 * @param {number} numberClick Nombre de clique 
 **/
function assertEventClick(buttonName, numberClick = 1) {
    render(component)
    const button = document.querySelector('.carroussel__btn-' + buttonName);
    
    for(let i = 0; i < numberClick; i++) {
        fireEvent.click(button);
    }
}

describe('Test component Carroussel', () => {

    it('should load without error', () => {
        render(component);
    })

    describe('Display component', () =>  {
        it('should contain the counter element', () => {
            render(component);
            const counter_element = document.querySelector('.carroussel__counter');
            expect(counter_element).not.toBe(null);
        })

        it('when load component the counter should display 1/3', () => {
            render(component);
            const counter_element = document.querySelector('.carroussel__counter');
            expect(counter_element.innerHTML).toBe('1/3');
        })

        it('when load should display first children', () => {
            render(component)
            const img_element = document.querySelector('img');
            expect(img_element.alt).toBe('image-1');
        })
    })

    describe('Event component', () => {

       describe('When click right button', () => {
           it('should selected next image', () => {
                assertEventClick('right');
                const img_element = document.querySelector('img');
                expect(img_element.alt).toBe('image-2');
           })

           it('should change number image selected on the counter', () => {
                assertEventClick('right');
                const counter_element = document.querySelector('.carroussel__counter');
                expect(counter_element.innerHTML).toBe('2/3');
           })

           it('sould display image-1 when click on the last image', () => {
                assertEventClick('right', 3);
                const img = document.querySelector('img');
                expect(img.alt).toBe('image-1');
           })
       })
        
       describe('When click left button', () => {
        it('should selected prevent image', () => {
            assertEventClick('right', 2);
            assertEventClick('left');
            const img_element = document.querySelector('img');
            expect(img_element.alt).toBe('image-2');
        })

        it('should change number image selected on the counter', () => {
            assertEventClick('right', 2); 
            assertEventClick('left');
            const counter_element = document.querySelector('.carroussel__counter');
            expect(counter_element.innerHTML).toBe('2/3');
        })

        it('sould display image-1 when click on the last image', () => {
             assertEventClick('left');
             const img = document.querySelector('img');
             expect(img.alt).toBe('image-3');
        })
    })
    })
})