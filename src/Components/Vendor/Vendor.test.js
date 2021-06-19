import {render} from '@testing-library/react';
import { assertThrowComponent } from '../../Tests/asserts';
import Vendor from './Vendor';

const component = <Vendor firstname="test_firstname" lastname="test_lastname" avatar_url="http://my-avatar.test" rating={1} />

describe('Test component vendor', () => {
    it('should load without error', () => {
        render(<Vendor firstname="Joudrier" lastname="Kevin" avatar_url="" rating={2.5} />);        
    })

    describe('Throw an exception', () => {
        it('should throw an exception if doesn\'t contain firstname property', () => {
            assertThrowComponent(<Vendor />, 'The component doesn\'t contain firstname property');
        })

        it('should throw an exception if doesn\'t contain lastname property', () => {
            assertThrowComponent(<Vendor firstname="" />, 'The component doesn\'t contain lastname property');
        })

        it('should throw an exception if doesn\'t contain avatar_url property', () => {
            assertThrowComponent(<Vendor firstname="" lastname="" />, 'The component doesn\'t contain avatar_url property');
        })

        it('should throw an exception if doesn\'t contain rating property', () => {
            assertThrowComponent(<Vendor firstname="" lastname="" avatar_url="" />, 'The component doesn\'t contain rating property');
        })
    })

    describe('Display component', () => {

        it('should display firstname', () => {
            render(component);
            const firstname_element = document.querySelector('.vendor_firstname');
            expect(firstname_element.innerHTML).toBe('test_firstname');
        })

        it('should display lastname', () => {
            render(component);
            const lastname_element = document.querySelector('.vendor_lastname');
            expect(lastname_element.innerHTML).toBe('test_lastname');
        })

        it('should display avatar_url', () => {
            render(component);
            const avatar_element = document.querySelector('.vendor__avatar img');
            expect(avatar_element.src).toBe('http://my-avatar.test/');
        })

        it('should display rating', () => {
            render(component);
            const rates_element = document.querySelector('.vendor__rates .rates');
            expect(rates_element).not.toBe(null);
        })

    })
})