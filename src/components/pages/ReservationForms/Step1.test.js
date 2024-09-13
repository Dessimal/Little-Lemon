import { render, screen, fireEvent } from "@testing-library/react";
import Step1 from "./Step1";
import { Formik } from "formik";

test("renders Step 1 form correctly", () => {
  render(<Step1 handleNext={jest.fn()} />);

  const dateInput = screen.getByLabelText(/Date:/i);
  const timeSelect = screen.getByLabelText(/Time:/i);
  const dinersSelect = screen.getByLabelText(/No. of Diners:/i);
  const occasionSelect = screen.getByLabelText(/Ocassion Type:/i);

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(dinersSelect).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();
});

test("allows user to fill in date, time, diners, and occasion", () => {
  render(<Step1 handleNext={jest.fn()} />);

  fireEvent.change(screen.getByLabelText(/Date:/i), {
    target: { value: "2024-09-15" },
  });
  fireEvent.change(screen.getByLabelText(/Time:/i), {
    target: { value: "7:00PM" },
  });
  fireEvent.change(screen.getByLabelText(/No. of Diners:/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/Ocassion Type:/i), {
    target: { value: "Anniversary" },
  });

  expect(screen.getByLabelText(/Date:/i).value).toBe("2024-09-15");
  expect(screen.getByLabelText(/Time:/i).value).toBe("7:00PM");
  expect(screen.getByLabelText(/No. of Diners:/i).value).toBe("4");
  expect(screen.getByLabelText(/Ocassion Type:/i).value).toBe("Anniversary");
});

test("calls handleNext with form data when Next is clicked", () => {
  const mockHandleNext = jest.fn();

  render(<Step1 handleNext={mockHandleNext} />);

  fireEvent.change(screen.getByLabelText(/Date:/i), {
    target: { value: "2024-09-15" },
  });
  fireEvent.change(screen.getByLabelText(/Time:/i), {
    target: { value: "7:00PM" },
  });
  fireEvent.change(screen.getByLabelText(/No. of Diners:/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/Ocassion Type:/i), {
    target: { value: "Anniversary" },
  });

  fireEvent.click(screen.getByText(/Next/i));

  expect(mockHandleNext).toHaveBeenCalledWith({
    date: "2024-09-15",
    time: "7:00PM",
    diners: "4",
    occasion: "Anniversary",
  });
});

test("shows validation error if form is incomplete", async () => {
  render(<Step1 handleNext={jest.fn()} />);

  fireEvent.click(screen.getByText(/Next/i));

  const errorMessages = await screen.findAllByText(/is required/i);
  expect(errorMessages.length).toBeGreaterThan(0);
});
