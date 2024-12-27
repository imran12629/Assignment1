import React, { useState } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

const LoginScreen: React.FC = () => {
  const [username, setUserName] = useState('');
  const [password, setPassworrd] = useState('');

  const isButtonVisible = username.trim() !== '' || password.trim() !== '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <AppInput
        label="User Name"
        placeholder="Enter User name"
        value={username}
        onChangeText={setUserName}
      />
      <AppInput
       label="Password"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassworrd}
       
      />
      {isButtonVisible && (
        <AppButton title="Submit" onPress={() => {}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  title:{
    fontSize:20,
    paddingVertical:20,
    
  }
});

export default LoginScreen;
