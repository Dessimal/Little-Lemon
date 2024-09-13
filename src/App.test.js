import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Nav component", () => {
  render(<App />);
  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

test("renders the Home component", () => {
  render(<App />);
  const homeHeading = screen.getByText(/Little Lemon/i);
  expect(homeHeading).toBeInTheDocument();
});

test("renders the Footer component", () => {
  render(<App />);
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement).toBeInTheDocument();
});
