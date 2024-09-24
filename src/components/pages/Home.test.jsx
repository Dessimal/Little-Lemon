import React from "react";
import "@testing-library/jest-dom"; // This adds custom matchers like toBeInTheDocument
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../Hero";
import Main from "../Main";

const MockedHero = () => (
  <BrowserRouter>
    <Hero />
  </BrowserRouter>
);

describe("Hero", () => {
  it("should render main heading", () => {
    render(<MockedHero />);
    const mainHeadingText = screen.getByText(/Little Lemon/i);
    expect(mainHeadingText).toBeInTheDocument();
  });

  it("should render reserve table button", () => {
    render(<MockedHero />);
    const reserveTableButton = screen.getByText(/Reserve a Table/i);
    expect(reserveTableButton).toBeInTheDocument();
  });
});
