import {Alert, Linking, Platform, PermissionsAndroid} from 'react-native';
import Toast from 'react-native-toast-message';
import Geolocation from 'react-native-geolocation-service';
import {setUserLocation} from '../redux/reducers/userReducer';
import Geocoder from 'react-native-geocoding';
import {store} from '../redux/store';
import {GOOGLE_MAP_API_KEY} from '../utils/config';
import {COUNTRY_DATA} from '../utils/CountryData';

export const showToast = (text1: any, text2: any, type: any) => {
  Toast.show({text1, text2, type: type ? 'success' : 'error'});
};

const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow Travego to determine your location.`,
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }
  return false;
};

const getAndroidPermission = async () => {
  console.log('checking permisson');
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  } else {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      // ToastAndroid.show(
      //     'Location permission denied by user.',
      //     ToastAndroid.LONG,
      // );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      // ToastAndroid.show(
      //     'Location permission revoked by user.',
      //     ToastAndroid.LONG,
      // );
    }
  }
};

export const hasLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  } else if (Platform.OS === 'android') {
    return getAndroidPermission();
  } else {
    return false;
  }
};

export const getRegion = shortName => {
  for (let i in COUNTRY_DATA) {
    if (i?.toLowerCase() === shortName?.toLowerCase()) {
      return COUNTRY_DATA[i];
    }
  }
};

export const getAddressOfUser = async (lat: any, long: any, callback: any) => {
  await Geocoder.init(GOOGLE_MAP_API_KEY);
  await Geocoder.from(lat, long)
    .then(json => {
      let addressComponent = {
        address: json?.results[0]?.formatted_address,
        state:
          json?.results[0]?.address_components[7].long_name +
          ' ' +
          json?.results[0]?.address_components[8].long_name,
        region: getRegion(json?.results[0]?.address_components[8].short_name),
      };
      callback(addressComponent);
    })
    .catch(error => {
      callback(error);
    });
};

export const getLocation = async (callback: any) => {
  const hasPermission = await hasLocationPermission();

  if (!hasPermission) {
    return;
  }

  const options = {
    accuracy: {
      android: 'high',
      ios: 'best',
    },
    // enableHighAccuracy: true,
    timeout: 3600000,
    // distanceFilter: 0,
    // forceRequestLocation: true,
    // forceLocationManager: true,
    // showLocationDialog: true,
  };
  if (Platform.OS === 'ios') {
    options['maximumAge'] = 10000;
  }

  await Geolocation.getCurrentPosition(
    position => {
      const currentLongitude = parseFloat(position.coords.longitude);
      const currentLatitude = parseFloat(position.coords.latitude);
      let location = {
        latitude: currentLatitude,
        longitude: currentLongitude,
      };
      getAddressOfUser(currentLatitude, currentLongitude, response => {
        let location = {
          latitude: currentLatitude,
          longitude: currentLongitude,
          address: response,
        };
        callback(location);
        store.dispatch(setUserLocation(location));
      });
    },
    error => {
      // Alert.alert(`Code ${error.code}`, error.message);
      console.log(error);
    },
    options,
  );
};
