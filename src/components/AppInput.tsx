import React from 'react';
import {StyleSheet, TextInput, View, Text, TextInputProps} from 'react-native';

interface AppInputProps extends TextInputProps {
  label: string;
  
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  style,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    color: '#333',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  inputNormal: {
    borderColor: '#ccc',
  },
  inputError: {
    borderColor: '#ff4d4d',
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: '#ff4d4d',
  },
});

export default AppInput;
