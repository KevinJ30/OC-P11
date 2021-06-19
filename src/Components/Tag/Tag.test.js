import {render} from '@testing-library/react';
import { assertThrowComponent } from '../../Tests/asserts';
import Tag from './Tag';

describe('Test component Tag', () => {

    it('should load without error', () => {
        render(<Tag name="test" />)
    })
    
    it('should throw an exception if the component doesn\'t content name property', () => {
        assertThrowComponent(<Tag />, 'The component must contain name property');
    });

    it('should display name in the span HTMLElement', () => {
        render(<Tag name="test" />)
        const span = document.querySelector('span');
        expect(span).not.toBe(null);
        expect(span.innerHTML).toBe("test");
    })

    it('should contain tag className on the span element', () => {
        render(<Tag name="test" />);
        const span = document.querySelector('span');
        expect(span.classList.contains('tag'));
    })
})