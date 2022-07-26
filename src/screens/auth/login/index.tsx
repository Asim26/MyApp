import React from 'react';
import {View, StyleSheet, Platform, Text, Alert} from 'react-native';
import colors from '../../../assets/colors/colors';
import images from '../../../assets/images/images';
import Button from '../../../shared/components/button/button';
import Wrapper from '../../../shared/components/wrapper';
import {showToast} from '../../../shared/services/HelperService';
import {RF} from '../../../shared/theme/responsive';
import FirebaseHelper from '../../../shared/utils/FirebaseHelper';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../shared/redux/reducers/userReducer';

const Login = () => {
  const dispatch = useDispatch();

  const googleSignIn = () => {
    FirebaseHelper.googleSignIn((user: any) => {
      console.log('gmail login response...', user);
      // Alert.alert(`Welcome ${user?.name}`, '', [
      //   {text: 'Thanks', onPress: () => {}},
      // ]);
      let userObj = {
        id: user.id,
        name: user.name,
        email: user.email,
        profilePic: user.photo,
      };
      dispatch(setUser(userObj));
      showToast('Success', 'Gmail Social Login', true);
    });
  };
  const facebookSignIn = () => {
    FirebaseHelper.facebookSignIn((user: any) => {
      console.log('fb login response...', user);
      let userObj = {
        id: user.uid,
        name: user.displayName,
        email: '',
        profilePic: user.photoURL,
      };
      dispatch(setUser(userObj));
      showToast('Success', 'Facebook Social Login', true);
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
            onPress={() => {
              facebookSignIn();
            }}
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
