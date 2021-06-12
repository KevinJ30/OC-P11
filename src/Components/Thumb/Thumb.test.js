import {render} from '@testing-library/react';
import { assertThrowComponent } from '../../Tests/asserts';
import Thumb from './Thumb';

describe('Test component Thumb', () => {
    it('should load without error', () => {
        render(<Thumb url_img="http://lorempixel.com/640/480/" />);
    })

    describe('An exception', () => {
        it('should throw an exception if the component doesn\'t contain url_img property', () => {
            assertThrowComponent(<Thumb />, 'The component doesn\'t contain url_img property');
        })
    })

    describe('Display component', () => {
        it('should display title if property exist', () => {
            render(<Thumb title="My title" url_img="http://lorempixel.com/640/480/" />);
            const title = document.querySelector('.thumb__title');
            expect(title.innerHTML).toBe('My title'); 
        })

        it('should display image', () => {
            render(<Thumb title="My title" url_img="http://lorempixel.com/640/480/" />);
            const img = document.querySelector('.thumb__img');
            expect(img.src).toBe('http://lorempixel.com/640/480/');
        })
    })

    // it('should display title property if exist', () => {
    //     render(<Thumb title="My good location" url_img="http://lorempixel.com/640/480/" />);
    // })
})