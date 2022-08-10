import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import MainStack from './stacks/mainStack';
import SplashScreen from 'react-native-splash-screen';

const RootStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const {user} = useSelector((state: any) => state.root.user);
  return <>{user ? <MainStack /> : <AuthStack />}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootStack;
