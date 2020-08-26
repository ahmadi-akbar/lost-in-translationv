import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders titlebar', () => {
  const { getByText } = render(<App />);
  const titlebar = getByText(/Lost in Translation/i);
  expect(titlebar).toBeInTheDocument();
});
