import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import catLogo from '../assets/icons8-cat-100.png'
import userEvent from '@testing-library/user-event';

describe ("<Header />", () => {
    it("has an image", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", catLogo)
    })

    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        userEvent.click(screen.getByText('WHISKERS'))
        expect(screen.getByText("WHISKERS")).toBeInTheDocument()
        userEvent.click(screen.getByText('Browse Cats'))
        expect(screen.getByText("Browse Cats")).toBeInTheDocument()
        userEvent.click(screen.getByText('Find Cat'))
        expect(screen.getByText("Find Cat")).toBeInTheDocument()
        userEvent.click(screen.getByText('Create Profile'))
        expect(screen.getByText("Create Profile")).toBeInTheDocument()
    })
})