import React from 'react';

function AddressSearch() {
  return (
    <div>
      <label htmlFor="address-input">Enter an address:</label>
      <input id="address-input" type="text" />
      <button>Search</button>
    </div>
  );
}

export default AddressSearch;