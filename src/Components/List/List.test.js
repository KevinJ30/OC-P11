import { render, screen } from "@testing-library/react"
import List from './List';

describe('Test Component List', () => {

    it('should load without error', () => {
        const list = [{text:'Mon super titre'}, {text: 'Mon second element'}, {text: 'Mon troisième element'}];
        render(<List elements={list} />)
    })

    describe('Throw an exception', () => {
        it('should throw an exception when the component does not contains property elements', () => {
            let error = false;
    
            try {
                render(<List />);
            } catch(e) {
                error = true;
            }
    
            expect(error).toEqual(true);
        })

        it('should throw an exception not contains object in elements list', () => {
            let error = false;

            const list = ['Ma super list', 'test liste'];
            
            try {
                render(<List elements={list} />);
            } catch(e) {
                error = true;
            }
    
            expect(error).toEqual(true);
        })

        it('should throw an exception if object in elements list does not contain property text', () => {
            let error = false;

            const list = [{type: 'Ma liste'}];
            
            try {
                render(<List elements={list} />);
            } catch(e) {
                error = true;
            }
    
            expect(error).toEqual(true);
        })
    })

    describe("Tests displaying list", () => {

        it('The components should contains 3 elements', () => {
            const list = [{text: 'My first element'}, {text: "My second element"}, {text: "My third element"}];
            render(<List elements={list} />);
            const elements = screen.getAllByRole("listitem");
            expect(elements.length).toBe(3);
        });

    });
   
})