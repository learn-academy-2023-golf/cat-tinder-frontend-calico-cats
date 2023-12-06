import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom';
import catError from '../assets/cat404.png'

describe ("<NotFound />", () => {
    it ("has an image", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", catError)
    })
})