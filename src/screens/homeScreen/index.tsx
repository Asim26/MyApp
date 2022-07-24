import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wrapper from '../../shared/components/wrapper';

const HomeScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
