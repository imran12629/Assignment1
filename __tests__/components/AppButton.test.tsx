import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react-native';
import AppButton from '../../src/components/AppButton';


describe('AppButton Component', () => {

  it('renders correctly with the provided title', () => {
    const { getByText } = render(<AppButton title="Click Me" onPress={() => {}} />);
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  it('handles the onPress event', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <AppButton title="Press Me" onPress={mockOnPress} />
    );

    const button = getByTestId('appButton');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
})
