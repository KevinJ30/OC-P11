import {render} from "@testing-library/react";

export function assertThrowComponent(component, messageException) {
    const err = console.error;
    console.error = jest.fn();
    expect(() => render(component)).toThrowError(messageException);
    console.error = err;
}