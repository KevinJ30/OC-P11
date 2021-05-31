/**
 * property :
 *  - img_url : liens vers l'image d'arrière plans
 *  - text : Text à l'intérieure de la section
 * 
 * 
 **/

// Test le comportement au lancement

// Tester que le composant contiens une balise img
// Tester que l'image contient une scr contenant le chemin de l'image

// Tester le chargement avec les property
    // sans image
    // sans text
    // sans couleur
    // sans padding

import {render, screen} from '@testing-library/react';
import Section from './Section';

describe('Test comoponent section', () => {

    it('should load without error', () => {
        render(<Section />);
    })

    describe('Testing property component', () => {

        describe('Property image', () => {
            it('should contain img html if the src property exists', () => {
                render(<Section src="image.jpg" />);
                screen.getByAltText('section');
            })
    
            it('should contain property src in the tag html', () => {
                render(<Section src="image.jpg" />);
                const img_element = screen.getByAltText('section');
                expect(img_element.src).toBe('http://localhost/image.jpg');
            })
        })
        
        describe('Property color', () => {
            it('should contain background styles property if property exist', () => {
                render(<Section color="#000" />)
                expect(screen.getByTestId('background')).toHaveStyle('background: #000');
            })

            it('shouldn\'t contain background styles property if not property exist', () => {
                render(<Section />)
                expect(screen.getByTestId('background')).not.toHaveStyle('background: #000');
            })
        })

        describe('Property Text', () => {
            it('should contain html tag p if property text exist', () => {
                render(<Section text="My great testing" />);
                const text_element = screen.getByText('My great testing');
                expect(text_element.constructor.name).toBe('HTMLParagraphElement');
            })
        })
    })
})