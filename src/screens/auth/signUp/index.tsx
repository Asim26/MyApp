//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wrapper from '../../../shared/components/wrapper';

// create a component
const SignUp = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text>SignUp</Text>
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
export default SignUp;
