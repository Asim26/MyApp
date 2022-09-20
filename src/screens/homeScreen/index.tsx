import React, {Component, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from '../../shared/components/wrapper';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {RF} from '../../shared/theme/responsive';

const HomeScreen = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={{paddingHorizontal: RF(10), flex: 1}}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            nearbyPlacesAPI="GoogleReverseGeocoding"
            currentLocation={true}
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            textInputProps={{
              placeholderTextColor: 'gray',
            }}
            styles={{
              textInputContainer: {
                borderBottomWidth: 0.25,
                borderColor: 'gray',
              },
              textInput: {
                backgroundColor: 'transparent',
                color: 'black',
              },
            }}
            query={{
              key: 'AIzaSyD3YCY01PIvIqIQB0nJfrsIUiI2VkCrQqc',
              language: 'en',
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RF(14),
  },
  map: {
    // flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default HomeScreen;
