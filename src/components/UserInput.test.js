import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import UserInput from './UserInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <UserInput
      textFieldLabel='asjdøfl'
      buttonTitle='dajk'
      onReadyToSubmit={(test) => {}}
      iconName='account'
    />,
    div
  );
});

test('renders account icon', () => {
  const { getByTestId } = render(
    <UserInput
      textFieldLabel='asjdøfl'
      buttonTitle='dajk'
      onReadyToSubmit={(test) => {}}
      iconName='account'
    />
  );
  const AccountCircle = getByTestId('account');
  expect(AccountCircle).toBeInTheDocument();
});

test('renders keyboard icon', () => {
  const { getByTestId } = render(
    <UserInput
      textFieldLabel='asjdøfl'
      buttonTitle='dajk'
      onReadyToSubmit={(test) => {}}
      iconName='keyboard'
    />
  );
  const AccountCircle = getByTestId('keyboard');
  expect(AccountCircle).toBeInTheDocument();
});
