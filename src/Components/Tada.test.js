import React from 'react'
import Tada from './Tada'
import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("Renders a collect Tada exclamation text", () => {
    const { getByTestId } = render(<Tada />)
    const first = getByTestId("info")

    expect(first.textContent).toBe("Tada! Get started with a free template. Can't find what you are looking for? Search from the 1000+ available templates")
})
