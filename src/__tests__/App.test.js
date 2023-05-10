import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the header', () => {
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the addressSearch component', () => {
    const addressSearchElement = screen.getByLabelText('Enter an address:');
    expect(addressSearchElement).toBeInTheDocument();
  });
});