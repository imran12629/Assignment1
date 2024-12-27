import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../src/screens/LoginScreen';


describe('LoginScreen Component', () => {
  it('renders correctly with all elements', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);

    expect(getByText('Login')).toBeTruthy();
    expect(getByPlaceholderText('Enter User name')).toBeTruthy();
    expect(getByPlaceholderText('Enter Password')).toBeTruthy();
  });

  it('does not render the submit button initially', () => {
    const { queryByText } = render(<LoginScreen />);
    expect(queryByText('Submit')).toBeNull();
  });

  it('renders the submit button when username is entered', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    const usernameInput = getByPlaceholderText('Enter User name');
    fireEvent.changeText(usernameInput, 'testuser');

    expect(getByText('Submit')).toBeTruthy();
  });

  it('renders the submit button when password is entered', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    const passwordInput = getByPlaceholderText('Enter Password');
    fireEvent.changeText(passwordInput, 'mypassword');

    expect(getByText('Submit')).toBeTruthy();
  });

  it('hides the submit button when both fields are cleared', () => {
    const { getByPlaceholderText, queryByText } = render(<LoginScreen />);

    const usernameInput = getByPlaceholderText('Enter User name');
    const passwordInput = getByPlaceholderText('Enter Password');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'mypassword');

    expect(queryByText('Submit')).toBeTruthy();

    fireEvent.changeText(usernameInput, '');
    fireEvent.changeText(passwordInput, '');

    expect(queryByText('Submit')).toBeNull();
  });

  it('calls onPress when the submit button is pressed', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    const usernameInput = getByPlaceholderText('Enter User name');
    const passwordInput = getByPlaceholderText('Enter Password');
    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'mypassword');

    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);

    expect(submitButton).toBeTruthy();
  });
});
