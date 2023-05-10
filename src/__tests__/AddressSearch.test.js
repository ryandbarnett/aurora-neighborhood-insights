import React from 'react';
import { render } from '@testing-library/react';
import AddressSearch from '../components/AddressSearch';

describe('AddressSearch', () => {
  it('should render an input box for the address search', () => {
    const { getByLabelText } = render(<AddressSearch />);
    const inputElement = getByLabelText('Enter an address:');
    expect(inputElement).toBeInTheDocument();
  });
});