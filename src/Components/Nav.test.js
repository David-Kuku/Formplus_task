import React from 'react'
import Nav from './Nav'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux'
import store from '../Redux/Templates/Store'


// the same logic goes for changing the category sort values, order sort values and date sort values
// so therefore the same test applies to them
test("Changing Category value to E-commerce", () => {
    const { getByTestId } = render(<Provider store={store}><Nav /></Provider>);
    const categoryfield = getByTestId("select");

    fireEvent.change(categoryfield, {
        target: {
            value: "E-commerce"
        }
    })

    expect(categoryfield.value).toBe("E-commerce")
})

test("Changing Order value to Ascending", () => {
    const { getByTestId } = render(<Provider store={store}><Nav /></Provider>);
    const categoryfield = getByTestId("selectorder");


    fireEvent.change(categoryfield, {
        target: {
            value: "Ascending"
        }
    })

    expect(categoryfield.value).toBe("Ascending");


})