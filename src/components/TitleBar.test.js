import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './TitleBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TitleBar title='testing' />, div);
});
