import { render, screen, fireEvent } from "@testing-library/react";
import Step3 from "./Step3";

test("renders special requests form", () => {
  render(<Step3 handlePrevious={jest.fn()} handleNext={jest.fn()} />);

  const heading = screen.getByText(/Special Requests/i);
  const textarea = screen.getByLabelText(/Special Requests:/i);

  expect(heading).toBeInTheDocument();
  expect(textarea).toBeInTheDocument();
});

test("allows user to type in special requests textarea", () => {
  render(<Step3 handlePrevious={jest.fn()} handleNext={jest.fn()} />);

  const textarea = screen.getByLabelText(/Special Requests:/i);

  // Simulate typing
  fireEvent.change(textarea, { target: { value: "Vegetarian meal please" } });

  // Ensure the value was correctly typed
  expect(textarea.value).toBe("Vegetarian meal please");
});

test("calls handleNext with form data when Next is clicked", () => {
  const mockHandleNext = jest.fn();
  render(<Step3 handlePrevious={jest.fn()} handleNext={mockHandleNext} />);

  const textarea = screen.getByLabelText(/Special Requests:/i);
  fireEvent.change(textarea, { target: { value: "No nuts" } });

  fireEvent.click(screen.getByText(/Next/i));

  // Ensure handleNext is called with the special request data
  expect(mockHandleNext).toHaveBeenCalledWith({ request: "No nuts" });
});

test("calls handlePrevious when Back is clicked", () => {
  const mockHandlePrevious = jest.fn();
  render(<Step3 handlePrevious={mockHandlePrevious} handleNext={jest.fn()} />);

  fireEvent.click(screen.getByText(/Back/i));

  expect(mockHandlePrevious).toHaveBeenCalled();
});
