import React from 'react'
import Searchbar from './Searchbar'
import { render,  fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux'
import store from  '../Redux/Templates/Store'

test("changing search value", ()=>{
    const { getByTestId } =  render(<Provider store={store}><Searchbar/></Provider>);
    const inputEl = getByTestId("searchbar");

    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    } )

    expect(inputEl.value).toBe("5")
})