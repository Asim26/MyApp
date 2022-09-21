import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {navigationRef} from './src/shared/services/NavService';
import {persistor, store} from './src/shared/redux/store';
import Toast from 'react-native-toast-message';
import RootStack from './src/routes';
import {
  getLocation,
  hasLocationPermission,
} from './src/shared/services/HelperService';
import {setUserLocation} from './src/shared/redux/reducers/userReducer';

const App = () => {
  useEffect(() => {
    hasLocationPermission();
    getLocation(response => {
      let location = {
        latitude: response?.latitude,
        longitude: response?.longitude,
        address: response,
      };
      store.dispatch(setUserLocation(location));
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <RootStack />
            <Toast position={'bottom'} />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
