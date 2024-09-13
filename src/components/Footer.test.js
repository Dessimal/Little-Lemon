import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders the footer", () => {
  render(<Footer />);
  const footerElement = screen.getByRole("contentinfo");
  expect(footerElement).toBeInTheDocument();
});
