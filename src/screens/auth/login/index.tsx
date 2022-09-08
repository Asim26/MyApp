import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';
import Button from '../../../shared/components/button/button';
import Wrapper from '../../../shared/components/wrapper';
import {RF} from '../../../shared/theme/responsive';
import FirebaseHelper from '../../../shared/utils/FirebaseHelper';

const Login = () => {
  const googleSignIn = () => {
    FirebaseHelper.googleSignIn((user: any) => {
    });
  };
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.heading}>Social Login</Text>

        <View style={{marginVertical: RF(5)}}>
          <Button
            title={'Continue with Google'}
            bgColor={'transparent'}
            iconPlace={'leftCenter'}
            titleStyle={{
              color: colors.BLACK,
              fontSize: RF(13),
            }}
            isIcon={true}
            icon={images.google}
            marginRightIcon={RF(4)}
            width={'90%'}
            onPress={() => {
              googleSignIn();
            }}
          />
        </View>
        <View style={{marginVertical: RF(5)}}>
          <Button
            title={'Continue with Facebook'}
            bgColor={colors.FACEBOOK}
            iconPlace={'leftCenter'}
            titleStyle={{
              color: colors.WHITE,
              fontSize: RF(13),
            }}
            isIcon={true}
            iconTintColor={colors.WHITE}
            marginRightIcon={RF(4)}
            icon={images.facebook}
            width={'90%'}
            onPress={() => {}}
          />
        </View>

        {Platform.OS === 'ios' && (
          <View style={{marginVertical: RF(5)}}>
            <Button
              title={'Continue with Apple'}
              bgColor={colors.BLACK}
              iconPlace={'leftCenter'}
              titleStyle={{
                color: colors.WHITE,
                fontSize: RF(13),
              }}
              isIcon={true}
              iconTintColor={colors.WHITE}
              marginRightIcon={RF(4)}
              icon={images.apple}
              width={'90%'}
              onPress={() => {}}
            />
          </View>
        )}
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: '600',
    fontSize: RF(22),
    marginBottom: RF(10),
  },
});

export default Login;
