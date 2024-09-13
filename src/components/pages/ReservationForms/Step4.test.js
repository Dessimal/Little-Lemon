import { render, screen, fireEvent } from "@testing-library/react";
import Step4 from "./Step4";
import { PaystackButton } from "react-paystack";

// Mock PaystackButton
jest.mock("react-paystack", () => ({
  PaystackButton: jest.fn(({ onSuccess }) => (
    <button onClick={() => onSuccess({ reference: "test-ref" })}>
      Pay Now
    </button>
  )),
}));

test("renders payment details and Paystack button", () => {
  render(
    <Step4
      amount={5000}
      reservation={{ diners: 4 }}
      componentProps={{ amount: 5000 }}
      handlePrevious={jest.fn()}
    />
  );

  const payNowButton = screen.getByText(/Pay Now/i);
  expect(payNowButton).toBeInTheDocument();
});

test("calls onSuccess when Paystack button is clicked", () => {
  const mockOnSuccess = jest.fn();
  const mockNavigate = jest.fn();

  render(
    <Step4
      amount={5000}
      reservation={{ diners: 4 }}
      componentProps={{ amount: 5000, onSuccess: mockOnSuccess }}
      handlePrevious={jest.fn()}
    />
  );

  const payNowButton = screen.getByText(/Pay Now/i);

  fireEvent.click(payNowButton);

  // Paystack button mock should trigger onSuccess with reference
  expect(mockOnSuccess).toHaveBeenCalledWith({ reference: "test-ref" });
});
