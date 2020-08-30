import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './TitleBar';
import { Provider } from 'react-redux';
import store from '../store/store';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <TitleBar title='testing' />
      </BrowserRouter>
    </Provider>,
    div
  );
});
