import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppInput from '../../src/components/AppInput';


describe('AppInput Component', () => {
  it('renders correctly with a label', () => {
    const { getByText } = render(
      <AppInput label="Username" value="" onChangeText={() => {}} />
    );
    const label = getByText('Username');
    expect(label).toBeTruthy();
  });

  it('renders correctly without a label', () => {
    const { queryByText } = render(
      <AppInput label="" value="" onChangeText={() => {}} />
    );
    const label = queryByText('');
    expect(label).toBeNull();
  });

  it('renders with the provided initial value', () => {
    const { getByDisplayValue } = render(
      <AppInput label="Email" value="test@example.com" onChangeText={() => {}} />
    );
    const input = getByDisplayValue('test@example.com');
    expect(input).toBeTruthy();
  });

  it('calls onChangeText when the text changes', () => {
    const mockOnChangeText = jest.fn();
    const { getByDisplayValue } = render(
      <AppInput
        label="Password"
        value="1234"
        onChangeText={mockOnChangeText}
      />
    );
    const input = getByDisplayValue('1234');

    fireEvent.changeText(input, '12345');
    expect(mockOnChangeText).toHaveBeenCalledWith('12345');
  });
});
