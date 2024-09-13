import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders the Hero section", () => {
  render(<Home />);
  const heroHeading = screen.getByText(/Little Lemon/i);
  expect(heroHeading).toBeInTheDocument();
});

test("renders the Main section", () => {
  render(<Home />);
  const mainHeading = screen.getByText(/This Week's Specials/i);
  expect(mainHeading).toBeInTheDocument();
});
