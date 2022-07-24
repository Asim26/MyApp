import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../shared/utils/routes';
import {useSelector} from 'react-redux';
import Login from '../../../screens/auth/login';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {user} = useSelector((state: any) => state.root.user);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={Routes.LOGIN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.LOGIN} component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
