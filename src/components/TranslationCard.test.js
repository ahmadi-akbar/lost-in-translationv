import React from 'react';
import ReactDOM from 'react-dom';
import TranslationCard from './TranslationCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TranslationCard text='testing' />, div);
});
