import {render} from '@testing-library/react';
import Rates from "./Rates";
import {assertThrowComponent} from "../../Tests/asserts";

describe('Test component Rates', () => {

    it('should load without error', () => {
        const rating = 5;
        render(<Rates rating={rating} />)
    })

    describe('Throw an exception', () => {
        it('should throw an exception when the component does not contains property rating', () => {
            assertThrowComponent(<Rates />, 'The component does not contain property rating.');
        })

        it('should throw an exception if proeprty rating is not number', () => {
            assertThrowComponent(<Rates rating={"testing"} />, 'The property rating is not number.');
        })
    })

    describe('Display stars', () => {
        it('should display all the time five stars', () => {
            render(<Rates rating={0} />);
            const stars = document.querySelectorAll('span.icon-stars');
            expect(stars.length).toEqual(5);
        })

        it('should display the numbers of active stars corresponding to the mean', () => {
            render(<Rates rating={5} />);
            const stars = document.querySelectorAll('span.icon-stars.active');
            expect(stars.length).toEqual(5);
        });

        it('should display the numbers of stars active corresponding to the lower mean', () => {
            render(<Rates rating={4.7} />);
            const stars = document.querySelectorAll('span.icon-stars.active');
            expect(stars.length).toEqual(4);
        })

        it('should display the numbers of stars and the rest in the normal star', () => {
            render(<Rates rating={2} />);
            const stars = document.querySelectorAll('span.icon-stars');
            const stars_active = document.querySelectorAll('span.icon-stars.active');

            expect(stars.length).toBe(5);
            expect(stars_active.length).toBe(2);
        })
    })

});