import { calculateOffset } from './Handsign';
import Handsign from './Handsign';
import React from 'react';
import ReactDOM from 'react-dom';

it('converts letters to table indexes', () => {
  expect(calculateOffset('a')).toEqual({ row: 0, column: 0 });
  expect(calculateOffset('b')).toEqual({ row: 0, column: 1 });
  expect(calculateOffset('h')).toEqual({ row: 0, column: 7 });
  expect(calculateOffset('i')).toEqual({ row: 1, column: 0 });
  expect(calculateOffset('A')).toEqual({ row: 0, column: 0 });
});

it('handles space', () => {
  expect(calculateOffset(' ')).toEqual({ row: 3, column: 2 });
});

it('handles special characters', () => {
  expect(calculateOffset('&')).toEqual({ row: 3, column: 2 });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Handsign char='a' />, div);
});
