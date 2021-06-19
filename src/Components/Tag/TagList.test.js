import {render} from '@testing-library/react';
import { assertThrowComponent } from '../../Tests/asserts';
import TagList from "./TagList";

describe(('Test component TagList'), () => {

    // Le composant doit s'éxecuter sans générer une erreur
    it('should load without error', () => {
        const elements = ['My Tag', 'My Second Tag', 'My last tag'];
        render(<TagList list={elements} />);
    })

    // Le composant doit contenir une div qui a la classe TagList
    describe('An exception', () => {
        it('should throw an exception if the component doesn\'t contain list property', () => {
            assertThrowComponent(<TagList />, 'The component doesn\'t contain list property');
        })

        it('should the list property must be an array type', () => {
            assertThrowComponent(<TagList list="test" />, 'The list property doesn\'t array type');
        })
  ;  })

    // Le composant doit afficher tout les elements contenu dans la propriété list
    describe('Display component', () => {
        it('should display elements in the tags', () => {
            render(<TagList list={['1', '2', '3']} />);            
            const container = document.querySelector('.tags')
            expect(container).not.toBe(null);
        })

        it('should displays many elements as the array contains', () => {
            render(<TagList list={['1', '2', '3']} />);
            const elements = document.querySelectorAll('span');
            expect(elements.length).toBe(3);
        })

        it('should display component Tag', () => {
            render(<TagList list={['1', '2', '3']} />);
            const elements = document.querySelectorAll('span.tag');
            expect(elements.length).toBe(3);
        })
    })
});