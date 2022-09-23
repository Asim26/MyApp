import React, {Component, useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from '../../shared/components/wrapper';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {RF} from '../../shared/theme/responsive';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {customStyle} from '../../shared/utils/constants';
import {
  getAddressOfUser,
  getLocation,
  isObjectExist,
} from '../../shared/services/HelperService';
import images from '../../assets/images/images';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [search, setSearch] = useState('');
  const [places, setPlaces] = useState([]);

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [location, setLocation] = useState({});
  const focus = useIsFocused();

  useEffect(() => {
    if (focus) {
      getCurrentLocation();
    }
  }, [focus]);

  const onRegionChange = (region: any) => {
    getAddressOfUser(region?.latitude, region?.region?.longitude, address => {
      console.log('getAddressOfUser ==onRegionChange===>>>', address);

      setSearch(address?.address);
      setPlaces([]);
      setLocation({
        latitude: region?.latitude,
        longitude: region?.longitude,
        address: address,
      });
    });
  };

  const getCurrentLocation = () => {
    getLocation((response: any) => {
      if (response?.latitude && response?.longitude) {
        mapRef?.current?.animateToRegion({
          latitude: response?.latitude,
          longitude: response?.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
        setRegion({
          latitude: response?.latitude,
          longitude: response?.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });

        getAddressOfUser(response?.latitude, response?.longitude, address => {
          setSearch(address?.address);
          setPlaces([]);
          setLocation({
            latitude: response?.latitude,
            longitude: response?.longitude,
            address: address,
          });
        });
      }
    });
  };

  const moveToSearchedLocation = obj => {
    mapRef?.current?.animateToRegion(obj);
  };

  return (
    <Wrapper noPaddingBottom>
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: RF(20),
            height: RF(400),
            width: '100%',
            paddingHorizontal: RF(14),
            // justifyContent: 'space-around',
            // backgroundColor:'green',
            backgroundColor: 'transparent',
            zIndex: 1,
            // borderWidth: 1,
          }}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            nearbyPlacesAPI="GoogleReverseGeocoding"
            currentLocation={true}
            onPress={(data, details = null) => {
              console.log(data, details);
              let obj = {
                latitude: details?.geometry?.location?.lat,
                longitude: details?.geometry?.location?.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              };
              moveToSearchedLocation(obj);
            }}
            textInputProps={{
              placeholderTextColor: 'gray',
            }}
            styles={{
              textInputContainer: {
                borderBottomWidth: 0.25,
                borderColor: 'gray',
                backgroundColor: '#fff',
              },
              textInput: {
                backgroundColor: 'transparent',
                color: 'black',
                zIndex: 1,
              },
            }}
            query={{
              key: 'AIzaSyD3YCY01PIvIqIQB0nJfrsIUiI2VkCrQqc',
              language: 'en',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'blue',
          }}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={region}
            // showsUserLocation={true}
            // showsMyLocationButton={true}
            customMapStyle={customStyle}
            provider={PROVIDER_GOOGLE}
            onRegionChange={reg => {
              onRegionChange(reg);
            }}
            onMapReady={() => {
              mapRef?.current?.animateToRegion(region);
            }}>
            <View>
              <Marker
                // key={index}
                // ref={markerRef}
                coordinate={{
                  latitude: isObjectExist(location)
                    ? location?.latitude
                    : region?.latitude,
                  longitude: isObjectExist(location)
                    ? location.longitude
                    : region?.longitude,
                }}>
                <Image
                  source={images.mapPin}
                  style={{
                    height: RF(30),
                    width: RF(30),
                    resizeMode: 'contain',
                  }}
                />
              </Marker>
            </View>
          </MapView>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeScreen;
