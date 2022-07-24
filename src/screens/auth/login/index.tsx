//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wrapper from '../../../shared/components/wrapper';

// create a component
const Login = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </Wrapper>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Login;
