import { render, screen, fireEvent } from "@testing-library/react";
import Step2 from "./Step2";

const mockReservation = {
  date: "2024-09-15",
  time: "7:00PM",
  diners: 4,
  occasion: "Anniversary",
};

test("renders reservation summary correctly", () => {
  render(
    <Step2
      reservation={mockReservation}
      handleEdit={jest.fn()}
      handleNext={jest.fn()}
    />
  );

  expect(screen.getByText(/Date:/i)).toBeInTheDocument();
  expect(screen.getByText(/2024-09-15/i)).toBeInTheDocument();
  expect(screen.getByText(/Time:/i)).toBeInTheDocument();
  expect(screen.getByText(/7:00PM/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of Diners:/i)).toBeInTheDocument();
  expect(screen.getByText(/4/i)).toBeInTheDocument();
  expect(screen.getByText(/Occasion:/i)).toBeInTheDocument();
  expect(screen.getByText(/Anniversary/i)).toBeInTheDocument();
});

test("calls handleEdit when Edit button is clicked", () => {
  const mockHandleEdit = jest.fn();
  render(
    <Step2
      reservation={mockReservation}
      handleEdit={mockHandleEdit}
      handleNext={jest.fn()}
    />
  );

  fireEvent.click(screen.getByText(/Edit/i));

  expect(mockHandleEdit).toHaveBeenCalled();
});

test("calls handleNext when Next button is clicked", () => {
  const mockHandleNext = jest.fn();
  render(
    <Step2
      reservation={mockReservation}
      handleEdit={jest.fn()}
      handleNext={mockHandleNext}
    />
  );

  fireEvent.click(screen.getByText(/Next/i));

  expect(mockHandleNext).toHaveBeenCalled();
});
