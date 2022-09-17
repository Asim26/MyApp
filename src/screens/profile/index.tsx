import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from '../../shared/components/wrapper';
import {useDispatch, useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';

const Profile = () => {
  const {user} = useSelector((state: any) => state.root.user);
  return (
    <Wrapper>
      <View style={styles.container}>
        <Image
          source={{uri: user.photo}}
          style={{
            height: RFValue(100),
            width: RFValue(100),
            borderRadius: RFValue(50),
            marginBottom: RFValue(10),
          }}
        />
        <Text>Profile</Text>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
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

export default Profile;
