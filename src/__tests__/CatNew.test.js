import { render, screen } from '@testing-library/react';
import CatNew from '../pages/CatNew';
import { BrowserRouter } from 'react-router-dom';

describe("<CatNew />", () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
            <CatNew /> 
        </BrowserRouter>    
        )
    })

    it("renders the CatNew page for the user", () => {
        const element = screen.getByText("Create A New Cat Profile")
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Create A New Cat Profile")
    })

    it("has a form with entries for name, age, enjoys, and image", () => {
        const formName = screen.getByText("Name")
        expect(formName.getAttribute("for")).toEqual("name")
        const formAge = screen.getByText("Age")
        expect(formAge.getAttribute("for")).toEqual("age")
        const formEnjoys = screen.getByText("Enjoyment")
        expect(formEnjoys.getAttribute("for")).toEqual("enjoys")
        const formImage = screen.getByText("Profile Picture")
        expect(formImage.getAttribute("for")).toEqual("image")
    })
})