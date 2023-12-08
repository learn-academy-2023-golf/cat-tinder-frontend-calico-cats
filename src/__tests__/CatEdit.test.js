import { render, screen } from '@testing-library/react';
import CatEdit from '../pages/CatEdit';
import { BrowserRouter } from 'react-router-dom';
import CatShow from '../pages/CatShow';

describe("<CatEdit />", () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
            <CatEdit /> 
        </BrowserRouter>    
        )
    })

    it("renders the CatEdit page for the user", () => {
        const element = screen.getByRole("heading")
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent("Edit Profile")
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