import React from 'react';
import ReactDOM from 'react-dom';
import Translate from './Translate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Translate isLoggedIn={true} />, div);
});
