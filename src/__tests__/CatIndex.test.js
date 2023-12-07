import { render, screen } from '@testing-library/react';
import CatIndex from '../pages/CatIndex';
import { BrowserRouter } from 'react-router-dom';
import mockCats from '../mockCats';


describe("<CatIndex />", () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
            <CatIndex cats={mockCats}/> 
        </BrowserRouter>    
        )
    })
    it("renders cat name", () => {
        mockCats.forEach(cat => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
        })
    })
    it("renders cat's age'", () =>{
        mockCats.forEach(cat => {
            const catAge = screen.getByText(`Age: ${cat.age}`)
            expect(catAge).toBeInTheDocument()
        })
    })
    it("renders an image'", () =>{
        mockCats.forEach(cat => {
            const image = screen.getByAltText(`profile of a cat named ${cat.name}`)
            expect(image).toBeInTheDocument()
        })
    })      
})