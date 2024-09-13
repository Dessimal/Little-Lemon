import { render, screen, fireEvent } from '@testing-library/react';
import MainReservationForm from './MainReservationForm';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { BrowserRouter } from 'react-router-dom';

// Mocking the Kinde Auth hook
jest.mock('@kinde-oss/kinde-auth-react');

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test('renders step 1 of the reservation form', () => {
  useKindeAuth.mockReturnValue({ user: { email: 'test@test.com' } });

  renderWithRouter(<MainReservationForm />);

  const heading = screen.getByText(/Find a Table for Any Ocassion/i);
  expect(heading).toBeInTheDocument();
});

test('moves to step 2 after filling step 1 and clicking Next', () => {
  useKindeAuth.mockReturnValue({ user: { email: 'test@test.com' } });

  renderWithRouter(<MainReservationForm />);

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/Date/i), {
    target: { value: '2024-09-14' },
  });
  fireEvent.change(screen.getByLabelText(/Time/i), {
    target: { value: '12:00PM' },
  });
  fireEvent.change(screen.getByLabelText(/No. of Diners/i), {
    target: { value: 4 },
  });
  fireEvent.change(screen.getByLabelText(/Ocassion Type/i), {
    target: { value: 'Anniversary' },
  });

 
