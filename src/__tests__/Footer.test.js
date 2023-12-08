import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom';

describe("<Footer />", () => {
    it("it lists project authors", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )

        const authors = screen.getByText("Created By: Enrique, Jeffrey, & Sean")
        expect(authors).toBeInTheDocument()
    })

    it("has a heading", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )

        screen.getByRole('heading', {
            name: /Created By: Enrique, Jeffrey, & Sean/i
        })
    })
})