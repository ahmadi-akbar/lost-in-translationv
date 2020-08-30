import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

test('renders titlebar', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const titlebar = getByText(/Lost in Translation/i);
  expect(titlebar).toBeInTheDocument();
});
