import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe("<App /", () => {
    it("renders a greeting", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
      )
  
        const greeting = screen.getByText("Welcome to WHISKERS!")
        expect(greeting).toBeInTheDocument()
    })
  
    it("has a heading", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
      )
  
        const heading = screen.getByRole('heading', {
        name: /Welcome to WHISKERS!/i
        })
    })

    it("has a subheading", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )

        const subheading = screen.getByText('Where feline friendships are made!')
        expect(subheading).toBeInTheDocument()
    })
  })