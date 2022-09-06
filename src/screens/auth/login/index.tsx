//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Wrapper from '../../../shared/components/wrapper';

// create a component
const Login = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Pressable
          style={{backgroundColor: 'green', padding: 12, marginBottom: 15}}
          onPress={() => {}}>
          <Text style={{color: '#fff'}}>Login with Google</Text>
        </Pressable>

        <Pressable
          style={{backgroundColor: 'blue', padding: 12}}
          onPress={() => {}}>
          <Text style={{color: '#fff'}}>Login with Facebook</Text>
        </Pressable>
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
  },
});

//make this component available to the app
export default Login;
