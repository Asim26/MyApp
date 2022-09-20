import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wrapper from '../../shared/components/wrapper';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {RFValue} from 'react-native-responsive-fontsize';

const HomeScreen = () => {
  return (
    <Wrapper>
      <View style={{paddingHorizontal: RFValue(10), flex: 1}}>
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
    </Wrapper>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
