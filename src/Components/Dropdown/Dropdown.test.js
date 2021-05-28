import { render, fireEvent, act } from "@testing-library/react"
import Dropdown from './Dropdown';

describe('Test Components Dropdown', () => {

    it('should load without error', () => {
        render(<Dropdown title="My dropdown" />);
    })

    it('should throw an exception when the component does not contains a property title', () => {
        let error = false;

        try{
            render(<Dropdown />);
        } catch(e) {
            error = true;
        }

        expect(error).toEqual(true);
    })

    it('Should add class visible when click button', () => {
        render(<Dropdown title="My Dropdown"/>)
        const buttonElement = document.querySelector('button');

        fireEvent.click(buttonElement);

        const dropdown_element = document.querySelector('.dropdown');
        const dropdownContent = dropdown_element.querySelector('.dropdown__content');

        expect(true).toEqual(dropdownContent.classList.contains('visible'));
    })

    it('Should remove class visible when click twice', () => {
        render(<Dropdown title="My Dropdown"/>)
        const buttonElement = document.querySelector('button');

        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);

        const dropdown_element = document.querySelector('.dropdown');
        const dropdownContent = dropdown_element.querySelector('.dropdown__content');

        expect(true).not.toEqual(dropdownContent.classList.contains('visible'));
    })

})