import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

test("renders the navigation links", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test("renders the Sign In button", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const signInButton = screen.getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
});
